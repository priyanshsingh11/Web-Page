import { useEffect, useRef, useState } from 'react';
import { Terminal as TerminalIcon } from 'lucide-react';

type Line = { kind: 'in' | 'out'; text: string };

const EMAIL = 'priyanshsingh855@gmail.com';
const RESUME = 'https://drive.google.com/file/d/1PdfnHvgsal54m0gCk5yVpDvlkkngLqVW/view';
const LINKS = {
  github: 'https://github.com/priyanshsingh11',
  linkedin: 'https://www.linkedin.com/in/priyansh-singh-575a57289/',
  leetcode: 'https://leetcode.com/u/priyanshsingh11/',
};

const COMMANDS = ['help', 'about', 'skills', 'projects', 'experience', 'certs', 'resume', 'contact'];

const mono = 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace';

const run = (raw: string): { out: string[]; clear?: boolean; open?: string } => {
  const cmd = raw.trim().toLowerCase();
  switch (cmd) {
    case '':
      return { out: [] };
    case 'help':
      return {
        out: [
          'available commands:',
          '  about       who I am',
          '  skills      what I work with',
          '  projects    things I have built',
          '  experience  where I have worked',
          '  certs       certifications',
          '  resume      open my resume',
          '  contact     ways to reach me',
          '  clear       clear the screen',
        ],
      };
    case 'about':
    case 'whoami':
      return {
        out: [
          'Priyansh Singh',
          'AI & full-stack engineer (web + mobile).',
          'I build AI agents, RAG pipelines and production apps.',
        ],
      };
    case 'skills':
    case 'ls':
      return {
        out: [
          'web        react, next.js, tailwind',
          'mobile     react native, expo, flutter',
          'backend    node.js, express, fastapi, flask',
          'databases  mongodb, postgresql, redis, supabase',
          'ai         langchain, langgraph, rag, mcp, pytorch',
          'cloud      docker, aws, gcp, github actions',
          'automation playwright, puppeteer, scrapy, n8n',
        ],
      };
    case 'projects':
      return {
        out: [
          'advanced rag    retrieval pipelines for grounded answers',
          'trustgraph ai   explainable tender compliance engine',
          'agentforge      autonomous agent workflow system',
          'lumen ai        AI customer support orchestration',
          'wink & wear     fashion e-commerce platform',
          'virtual pandit  AI-powered conversational assistant',
        ],
      };
    case 'experience':
      return {
        out: [
          'ajaia.ai       junior engineer      jun 2026 - present',
          'tuned society  founding engineer    feb 2026 - present',
          'plypicker      full-stack engineer  jan 2025 - jan 2026',
          'freelance      developer            2024 - present',
        ],
      };
    case 'certs':
    case 'certifications':
      return {
        out: [
          'aws certified machine learning - associate',
          'machine learning specialization (deeplearning.ai)',
          'claude certified architect - foundations',
        ],
      };
    case 'resume':
      return { out: ['opening resume in a new tab...'], open: RESUME };
    case 'contact':
    case 'hire':
    case 'socials':
      return {
        out: [
          `email     ${EMAIL}`,
          `github    ${LINKS.github}`,
          `linkedin  ${LINKS.linkedin}`,
          `leetcode  ${LINKS.leetcode}`,
        ],
      };
    case 'mail':
    case 'email':
      return { out: [`opening mail to ${EMAIL}...`], open: `mailto:${EMAIL}` };
    case 'sudo hire me':
      return { out: ['[sudo] permission granted.', 'opening mail client... see you on the team.'], open: `mailto:${EMAIL}?subject=Let's work together` };
    case 'clear':
      return { out: [], clear: true };
    default:
      return { out: [`command not found: ${raw.trim()}`, "type 'help' to see what I can do"] };
  }
};

const intro: Line[] = [
  { kind: 'out', text: "Welcome. I'm Priyansh's terminal." },
  { kind: 'out', text: "Type a command or tap one below. Try 'help'." },
];

const TerminalSection = () => {
  const [lines, setLines] = useState<Line[]>(intro);
  const [value, setValue] = useState('');
  const [history, setHistory] = useState<string[]>([]);
  const [cursor, setCursor] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const bodyRef = useRef<HTMLDivElement>(null);

  // Keep the newest output in view without moving the page itself.
  useEffect(() => {
    const el = bodyRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [lines]);

  const submit = (raw: string) => {
    const result = run(raw);
    setHistory((h) => (raw.trim() ? [...h, raw.trim()] : h));
    setCursor(-1);
    setValue('');
    if (result.clear) {
      setLines([]);
      return;
    }
    setLines((prev) => [
      ...prev,
      { kind: 'in', text: raw },
      ...result.out.map((text): Line => ({ kind: 'out', text })),
    ]);
    if (result.open) window.open(result.open, result.open.startsWith('mailto:') ? '_self' : '_blank', 'noopener');
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      submit(value);
    } else if (e.key === 'ArrowUp' && history.length) {
      e.preventDefault();
      const next = cursor === -1 ? history.length - 1 : Math.max(0, cursor - 1);
      setCursor(next);
      setValue(history[next]);
    } else if (e.key === 'ArrowDown' && cursor !== -1) {
      e.preventDefault();
      const next = cursor + 1;
      if (next >= history.length) {
        setCursor(-1);
        setValue('');
      } else {
        setCursor(next);
        setValue(history[next]);
      }
    }
  };

  return (
    <section id="terminal" className="py-12 md:py-20 px-3 md:px-16 bg-transparent">
      <div className="relative z-10 max-w-5xl mx-auto border-[2px] border-[#FF5A2E] bg-black/85 backdrop-blur-md text-white shadow-[8px_8px_0_0_#000] md:shadow-[12px_12px_0_0_#000]">

        <div className="border-b-[2px] border-[#FF5A2E] bg-black/90 p-2 flex justify-between items-center">
          <div className="flex gap-2 items-center font-body text-sm md:text-lg tracking-wide px-2">
            <TerminalIcon size={14} className="text-[#FF5A2E]" />
            <span>ask_me_anything.exe</span>
          </div>
          <div className="flex gap-1 pr-2">
            <div className="w-2 h-2 border border-[#FF5A2E]"></div>
            <div className="w-2 h-2 border border-[#FF5A2E]"></div>
          </div>
        </div>

        <div className="p-4 md:p-8">
          <h2 className="font-extended text-xl md:text-3xl border-b-[2px] border-[#FF5A2E] pb-4 mb-6 text-white uppercase tracking-tight">
            Ask My Terminal
          </h2>

          {/* Command shortcuts */}
          <div className="flex flex-wrap gap-2 mb-4">
            {COMMANDS.map((c) => (
              <button
                key={c}
                type="button"
                onClick={() => {
                  submit(c);
                  inputRef.current?.focus({ preventScroll: true });
                }}
                className="px-3 py-1 border-[1px] border-[#FF5A2E] bg-black/40 text-[#FF5A2E] text-[13px] hover:bg-[#FF5A2E] hover:text-white transition-colors"
                style={{ fontFamily: mono }}
              >
                {c}
              </button>
            ))}
          </div>

          {/* Screen */}
          <div
            className="border-[1px] border-[#FF5A2E]/60 bg-[#0D0B0A] shadow-[4px_4px_0_0_#000]"
            style={{ fontFamily: mono }}
            onClick={() => inputRef.current?.focus({ preventScroll: true })}
          >
            <div ref={bodyRef} data-lenis-prevent className="overscroll-contain min-h-[80px] max-h-72 md:max-h-80 overflow-y-auto p-4 text-[13px] md:text-[14px] leading-relaxed">
              {lines.map((l, i) => (
                <div key={i} className={`whitespace-pre-wrap break-words ${l.kind === 'in' ? 'text-white' : 'text-white/80'}`}>
                  {l.kind === 'in' && <span className="text-[#FF5A2E]">$ </span>}
                  {l.text}
                </div>
              ))}
            </div>

            <label className="flex items-center gap-2 border-t border-[#FF5A2E]/40 px-4 py-3 text-[13px] md:text-[14px]">
              <span className="text-[#FF5A2E]">$</span>
              <input
                ref={inputRef}
                value={value}
                onChange={(e) => setValue(e.target.value)}
                onKeyDown={onKeyDown}
                aria-label="Terminal command"
                placeholder="type a command..."
                autoComplete="off"
                autoCapitalize="off"
                spellCheck={false}
                className="flex-1 bg-transparent text-white placeholder:text-white/40 focus:outline-none"
                style={{ fontFamily: mono }}
              />
            </label>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TerminalSection;
