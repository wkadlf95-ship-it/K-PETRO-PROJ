import { useEffect, useState } from "react";
import { GripVertical, Plus, RotateCcw, Save, X } from "../icons";
import { COLS, ROWS, clearLayout, loadLayout, saveLayout, type Placement } from "./layoutStore";
import { findWidget, widgetRegistry } from "./registry";

type PortletGridProps = {
  pageKey: string;
  defaultLayout: Placement[];
  /** 서버가 내려준 위젯 키. 없으면 전체 레지스트리를 쓴다. */
  allowedKeys?: string[];
};

const clamp = (n: number, min: number, max: number) => Math.min(max, Math.max(min, n));

export function PortletGrid({ pageKey, defaultLayout, allowedKeys }: PortletGridProps) {
  const [layout, setLayout] = useState<Placement[]>(() => loadLayout(pageKey, defaultLayout));
  const [moving, setMoving] = useState(false);
  const [dragKey, setDragKey] = useState<string | null>(null);
  const [preview, setPreview] = useState<{ col: number; row: number } | null>(null);
  const [notice, setNotice] = useState("");

  // 허용된 위젯만 남긴다. 서버가 위젯 권한을 판정하고 화면은 그린 것만 보여 준다.
  const allowed = allowedKeys ?? widgetRegistry.map((w) => w.key);
  const placed = layout.filter((p) => allowed.includes(p.key) && findWidget(p.key));
  const available = widgetRegistry.filter((w) => allowed.includes(w.key) && !placed.some((p) => p.key === w.key));

  useEffect(() => { setLayout(loadLayout(pageKey, defaultLayout)); }, [pageKey, defaultLayout]);

  const move = (key: string, col: number, row: number) => {
    setLayout((prev) =>
      prev.map((p) => (p.key === key ? { ...p, col: clamp(col, 0, COLS - 1), row: clamp(row, 0, ROWS - 1) } : p)),
    );
  };

  const nudge = (key: string, dCol: number, dRow: number) => {
    const cur = placed.find((p) => p.key === key);
    if (!cur) return;
    const col = clamp(cur.col + dCol, 0, COLS - 1);
    const row = clamp(cur.row + dRow, 0, ROWS - 1);
    move(key, col, row);
    setNotice(`${findWidget(key)?.title}을 ${col + 1}열 ${row + 1}행으로 옮겼습니다.`);
  };

  const remove = (key: string) => {
    setLayout((prev) => prev.filter((p) => p.key !== key));
    setNotice(`${findWidget(key)?.title}을 화면에서 뺐습니다.`);
  };

  const add = (key: string) => {
    const maxRow = placed.reduce((m, p) => Math.max(m, p.row), -1);
    setLayout((prev) => [...prev, { key, col: 0, row: clamp(maxRow + 1, 0, ROWS - 1) }]);
    setNotice(`${findWidget(key)?.title}을 화면에 넣었습니다.`);
  };

  const persist = () => { saveLayout(pageKey, layout); setNotice("배치를 저장했습니다."); };
  const reset = () => { clearLayout(pageKey); setLayout(defaultLayout); setNotice("기본 배치로 되돌렸습니다."); };

  return (
    <section className="pt" aria-labelledby="pt-title">
      <div className="pt__bar">
        <h2 id="pt-title">내 가격 화면</h2>
        <div className="pt__bar-actions">
          <button
            type="button"
            className={moving ? "pt__toggle is-active" : "pt__toggle"}
            aria-pressed={moving}
            onClick={() => { setMoving(!moving); setNotice(moving ? "이동 모드를 껐습니다." : "이동 모드를 켰습니다. 방향키로 옮길 수 있습니다."); }}
          >
            <GripVertical size={15} /> 이동 모드
          </button>
          <button type="button" className="pt__action" onClick={persist}><Save size={15} /> 배치 저장</button>
          <button type="button" className="pt__action" onClick={reset}><RotateCcw size={15} /> 기본값</button>
        </div>
      </div>

      {/* 이동·추가·삭제 결과를 스크린리더에 알린다 */}
      <p className="sr-only" role="status" aria-live="polite">{notice}</p>

      <div
        className={moving ? "pt-grid is-moving" : "pt-grid"}
        onDragOver={(e) => {
          if (!dragKey) return;
          e.preventDefault();
        }}
      >
        {/* 이동 모드에서만 놓을 칸을 깐다. 배치는 CSS 의 [data-col]/[data-row] 규칙이 정한다. */}
        {moving && dragKey &&
          Array.from({ length: ROWS * COLS }, (_, i) => {
            const col = i % COLS;
            const row = Math.trunc(i / COLS);
            if (row > placed.reduce((m, p) => Math.max(m, p.row), 0) + 1) return null;
            return (
              <span
                key={`cell-${col}-${row}`}
                className="pt-cell"
                data-col={col}
                data-row={row}
                aria-hidden="true"
                onDragEnter={() => setPreview({ col, row })}
                onDragOver={(e) => e.preventDefault()}
                onDrop={() => { move(dragKey, col, row); setPreview(null); setDragKey(null); }}
              />
            );
          })}

        {/* 미리보기 상자도 같은 배치 규칙을 써서 결과가 어긋나지 않는다 */}
        {preview && <span className="pt-preview" data-col={preview.col} data-row={preview.row} aria-hidden="true" />}

        {placed.map((p) => {
          const def = findWidget(p.key)!;
          return (
            <article
              key={p.key}
              className="pt-box"
              data-col={p.col}
              data-row={p.row}
              data-span={p.span ?? 1}
              draggable={moving}
              onDragStart={() => setDragKey(p.key)}
              onDragEnd={() => { setDragKey(null); setPreview(null); }}
              onKeyDown={(e) => {
                if (!moving) return;
                const d: Record<string, [number, number]> = {
                  ArrowLeft: [-1, 0], ArrowRight: [1, 0], ArrowUp: [0, -1], ArrowDown: [0, 1],
                };
                if (d[e.key]) { e.preventDefault(); nudge(p.key, d[e.key][0], d[e.key][1]); }
              }}
              tabIndex={moving ? 0 : -1}
              aria-label={moving ? `${def.title} — 방향키로 위치를 옮깁니다` : undefined}
            >
              <header className="pt-box__head">
                {moving && <GripVertical size={15} className="pt-box__grip" aria-hidden="true" />}
                <div>
                  <h3>{def.title}</h3>
                  <p>{def.desc}</p>
                </div>
                {moving && (
                  <button type="button" className="pt-box__remove" onClick={() => remove(p.key)} aria-label={`${def.title} 빼기`}>
                    <X size={15} />
                  </button>
                )}
              </header>
              <div className="pt-box__body"><def.Component /></div>
            </article>
          );
        })}
      </div>

      {moving && (
        <div className="pt-palette">
          <h3>넣을 수 있는 위젯</h3>
          {available.length === 0 ? (
            <p className="pt-palette__empty">모든 위젯이 화면에 놓여 있습니다.</p>
          ) : (
            <ul>
              {available.map((w) => (
                <li key={w.key}>
                  <button type="button" onClick={() => add(w.key)}>
                    <Plus size={14} /> {w.title}
                    <span>{w.desc}</span>
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </section>
  );
}
