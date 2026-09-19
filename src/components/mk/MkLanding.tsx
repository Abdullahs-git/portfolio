'use client';

import { useEffect } from 'react';
import { MK } from '@/data/mk';
import { display, mono } from '@/lib/fonts';
import './mk.css';

/*
 * MAB·26 — the landing page, told the way a keyboard product page tells it:
 * a typing hero with keycaps drifting around it, construction, feature
 * close-ups, lineage, a voice, two finishes and the final product.
 *
 * The board is real 3-D, but it is drawn into windows that sit in the page
 * flow ([data-window]) so the layout stays a page. The markup is rendered
 * once and never re-rendered: the world module takes ownership of it after
 * mount, so the component carries no state. The finish switch is pure CSS
 * on a pair of radios for the same reason.
 */

const Arrow = () => (
  <svg viewBox="0 0 14 14" fill="none" aria-hidden="true">
    <path d="M3 11 11 3M5 3h6v6" stroke="currentColor" strokeWidth="1.3" />
  </svg>
);

/** a page element the board is rendered into; the mask rounds its corners */
const Win = ({ kind, className, keyId }: { kind: string; className: string; keyId?: string }) => (
  <div className={`win ${className}`} data-window={kind} {...(keyId ? { 'data-key': keyId } : {})} aria-hidden="true">
    <i className="win-mask" />
  </div>
);

export function MkLanding() {
  useEffect(() => {
    const html = document.documentElement;
    html.classList.add('mk-page');
    html.dataset.theme = 'light';

    let destroy: (() => void) | null = null;
    let cancelled = false;
    import('./mk-world').then(({ bootMk }) => {
      if (cancelled) return;
      destroy = bootMk({
        typed: MK.build.typed,
        displayFont: display.style.fontFamily,
        monoFont: mono.style.fontFamily,
        preloaderLines: MK.preloader.lines,
      });
    });

    return () => {
      cancelled = true;
      if (destroy) destroy();
      html.classList.remove('mk-page');
      delete html.dataset.theme;
    };
  }, []);

  const { identity, nav, preloader, hero, build, features, work, voice, process, finish, final } = MK;
  const marquee = [...build.marquee, ...build.marquee, ...build.marquee];

  return (
    <div className="mk">
      <canvas id="gl" aria-hidden="true" />
      <div id="progress" aria-hidden="true" />

      {/* ============================================================ preloader */}
      <div id="pre" aria-live="polite" aria-label="Loading">
        <div className="pre-in">
          <div className="pre-prompt">
            {preloader.prompt}
            <i />
          </div>
          <div className="pre-log" id="pre-log" />
          <div className="pre-bar">
            <i id="pre-fill" />
          </div>
        </div>
      </div>

      {/* ============================================================ nav */}
      <header className="nav" id="nav">
        <a className="brand" href="#top">
          <span className="dot" />
          {nav.brand}
          <i>{nav.brandSuffix}</i>
        </a>
        <div className="nav-right">
          <button className="nav-sound" id="sound" type="button" aria-pressed="false">
            <span className="bars" aria-hidden="true">
              <i />
              <i />
              <i />
            </span>
            <span className="lab">{nav.sound} off</span>
          </button>
          <a className="nav-cta" href={nav.cta.href}>
            {nav.cta.label} →
          </a>
        </div>
      </header>

      <main className="page" id="top">
        {/* ============================================================ hero */}
        <section className="hero" id="hero">
          <div className="hero-center">
            <div className="hero-term" data-rv="fade">
              {hero.term}
              <i />
            </div>
            <h1 className="display h-hero">
              <span className="mask-line">
                <span>{hero.line1}</span>
              </span>
              <span className="mask-line accent">
                <span>{hero.line2}</span>
              </span>
            </h1>
            <p className="hero-sub" data-rv="up">
              {hero.sub[0]}
              <br />
              {hero.sub[1]}
            </p>
          </div>
          <div className="hero-foot">
            <span className="hero-corner" data-rv="fade">
              {hero.cornerLeft} <i>✕</i>
            </span>
            <div className="hero-cue" data-rv="fade">
              <span>{hero.cue}</span>
              <i className="line" />
            </div>
            <span className="hero-corner" data-rv="fade">
              {hero.cornerRight} <i>✕</i>
            </span>
          </div>
        </section>

        {/* ============================================================ 01 · construction */}
        <section className="sec build" id="build">
          <div className="build-stage">
            <div className="build-sticky">
              <span className="eyebrow">{build.eyebrow}</span>
              <div className="typed" id="typed" aria-hidden="true" />
              <Win kind="board" className="win--board" />
            </div>
          </div>

          <div className="marquee" aria-hidden="true">
            <div className="marquee-track">
              {marquee.map((m, i) => (
                <span key={i}>
                  {m} <i>✕</i>
                </span>
              ))}
            </div>
          </div>

          <div className="thesis">
            <span className="eyebrow" data-rv="fade">
              {build.thesisEyebrow}
            </span>
            <p data-words="">{build.thesis}</p>
          </div>
        </section>

        {/* ============================================================ 02 · feature */}
        <section className="sec feature" id="feature">
          <div className="sec-head">
            <span className="eyebrow" data-rv="fade">
              {features.eyebrow}
            </span>
            <span className="rule" />
          </div>
          {features.rows.map((f) => (
            <div className="feat" key={f.crop}>
              <div className="feat-copy">
                <span className="k" data-rv="fade">
                  {f.num} / 03
                </span>
                <h3 className="h-sec display" data-rv="up">
                  {f.title}
                </h3>
                <p className="body" data-rv="up">
                  {f.body}
                </p>
              </div>
              <Win kind={f.crop} className="win--crop" />
            </div>
          ))}
        </section>

        {/* ============================================================ 03 · lineage */}
        <section className="sec work" id="work">
          <div className="line-head">
            <span className="eyebrow" data-rv="fade">
              {work.eyebrow} <span className="pill">{work.pill}</span>
            </span>
            <h2 className="display h-sec" data-rv="up">
              {work.title}
            </h2>
            <p className="body" data-rv="up">
              {work.body}
            </p>
          </div>
          <div className="card-grey" data-rv="up">
            <div className="tiles">
              {work.projects.map((p) => {
                const Tag = p.url ? 'a' : 'article';
                const linkProps = p.url ? { href: p.url, target: '_blank', rel: 'noreferrer' } : {};
                return (
                  <Tag className="tile" key={p.title} aria-label={`${p.title} — ${p.category}`} {...linkProps}>
                    <div className="tile-screen" aria-hidden="true">
                      {p.image ? (
                        <img src={p.image} alt="" loading="lazy" decoding="async" />
                      ) : (
                        <>
                          <div className="bar">
                            <i />
                            <i />
                            <i />
                          </div>
                          <div className="mock">
                            <i />
                            <i />
                            <i />
                          </div>
                        </>
                      )}
                    </div>
                    <div className="tile-body">
                      <span className="cat">{p.category}</span>
                      <h3>
                        {p.title}
                        {p.url && <Arrow />}
                      </h3>
                      <div className="tags">
                        {p.tags.map((t) => (
                          <span key={t}>{t}</span>
                        ))}
                      </div>
                    </div>
                  </Tag>
                );
              })}
            </div>
            <div className="lineage">
              <div className="lineage-label">{work.lineageLabel}</div>
              {work.lineage.map((row) => (
                <div className="lin" key={row.year + row.title}>
                  <span className="y">{row.year}</span>
                  <b>{row.title}</b>
                  <p>{row.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================================ 04 · voice */}
        <section className="sec voice" id="voice">
          <div className="voice-head">
            <span className="eyebrow" data-rv="fade">
              {voice.eyebrow}
            </span>
            <span className="eyebrow" data-rv="fade">
              <span className="stars" aria-hidden="true">
                ★★★★★
              </span>
              {voice.meta}
            </span>
          </div>
          <div className="voice-grid">
            <div>
              <h2 className="display h-sec" data-rv="up">
                {voice.title[0]}
                <br />
                {voice.title[1]}
              </h2>
              <p className="body" data-rv="up">
                {voice.body}
              </p>
            </div>
            <figure className="tag-card" data-rv="up">
              <span className="string" aria-hidden="true" />
              <div className="paper">
                <span className="qm" aria-hidden="true">
                  “
                </span>
                <q>{voice.quote}</q>
                <footer>
                  <div className="who">
                    <span className="av" aria-hidden="true">
                      {identity.code.slice(0, 3)}
                    </span>
                    <div>
                      <b>{voice.author}</b>
                      <span>{voice.authorRole}</span>
                    </div>
                  </div>
                  <span className="tag">{voice.tag}</span>
                </footer>
              </div>
            </figure>
          </div>
        </section>

        {/* ============================================================ 05 · process */}
        <section className="sec process" id="process">
          <div className="sec-head">
            <span className="eyebrow" data-rv="fade">
              {process.eyebrow}
            </span>
            <span className="rule" />
          </div>
          <h2 className="display h-sec" data-rv="up">
            {process.title}
          </h2>
          <div className="steps">
            {process.steps.map((s) => (
              <div className="step" key={s.num} data-key={s.key} tabIndex={0}>
                <Win kind="key" className="win--key" keyId={s.key} />
                <span className="num">{s.num}</span>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
                <span className="t">{s.time}</span>
                <i className="bar" />
              </div>
            ))}
          </div>
        </section>

        {/* ============================================================ 06 · finish */}
        <section className="sec finish" id="finish">
          <div className="finish-stage">
            <span className="eyebrow" data-rv="fade">
              {finish.eyebrow}
            </span>
            <h2 className="display h-sec h-finish">
              <span className="mask-line">
                <span>{finish.line1}</span>
              </span>
              <span className="mask-line">
                <span>{finish.line2}</span>
              </span>
            </h2>
            <Win kind="finish" className="win--board" />
            <div className="finish-ui">
              {finish.panels.map((p, i) => (
                <input
                  key={p.id}
                  className="finish-radio"
                  type="radio"
                  name="finish"
                  id={`finish-${p.id}`}
                  defaultChecked={i === 0}
                  aria-label={`${p.label} finish`}
                />
              ))}
              <div className="finish-switch" role="group" aria-label="Finish">
                {finish.panels.map((p) => (
                  <label key={p.id} htmlFor={`finish-${p.id}`}>
                    <b>{p.num}</b>
                    {p.label}
                  </label>
                ))}
                <i className="thumb" aria-hidden="true" />
              </div>
              <div className="finish-panels">
                {finish.panels.map((p) => (
                  <div className="finish-panel" data-finish={p.id} key={p.id}>
                    <h3>{p.title}</h3>
                    <ul>
                      {p.items.map((it) => (
                        <li key={it}>{it}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================ final product */}
        <footer className="sec final" id="final">
          <div className="final-top">
            <h2 className="display h-final">
              <span className="mask-line">
                <span>{final.line1}</span>
              </span>
              <span className="mask-line">
                <span>{final.line2}</span>
              </span>
            </h2>
            <div className="stats" data-rv="up">
              {final.stats.map((s) => (
                <div key={s.label}>
                  <b className={s.accent ? 'accent' : ''}>{s.value}</b>
                  <span>{s.label}</span>
                </div>
              ))}
            </div>
            <div className="final-cta" data-rv="fade">
              <a className="cta cta--solid" href={`mailto:${identity.email}`}>
                {final.cta} →
              </a>
            </div>
          </div>

          <div className="final-product" data-rv="up">
            <div className="pmark">
              <span className="dot" aria-hidden="true" />
              <b>{final.productMark}</b>
              <span>{final.productWord}</span>
            </div>
            <div className="pside">
              <div className="pchips">
                {final.chips.map((c) => (
                  <a key={c.label} href={c.href} {...(c.external ? { target: '_blank', rel: 'noreferrer' } : {})}>
                    {c.label}
                  </a>
                ))}
              </div>
              <dl className="pspecs">
                {final.specs.map((s) => (
                  <div key={s.label}>
                    <dt>{s.label}</dt>
                    <dd>{s.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>

          <div className="foot-base">
            <span>{final.baseLeft}</span>
            <span>{final.baseRight}</span>
          </div>
        </footer>
      </main>
    </div>
  );
}

export default MkLanding;
