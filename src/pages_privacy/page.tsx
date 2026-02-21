import { Shield, Key, EyeOff, Database, CheckCircle, Lock } from "lucide-react";

const POLICY_SECTIONS = [
  {
    title: "1. Introduction",
    icon: <Shield className="size-6 text-[--text-primary]" />,
    content: (
      <>
        <p className="mb-4 text-[--muted-foreground]">
          Welcome to Column ("we," "our," or "us"). We respect your privacy and are committed to protecting it. 
          As a non-custodial wallet provider, our architecture is fundamentally built around user privacy and data minimization.
        </p>
        <p className="text-[--muted-foreground]">
          This Privacy Policy explains our practices regarding the collection, use, and disclosure of information when you use our wallet software and services.
        </p>
      </>
    ),
  },
  {
    title: "2. The Non-Custodial Nature of Our Service",
    icon: <Key className="size-6 text-[--text-primary]" />,
    content: (
      <>
        <p className="mb-4 text-[--muted-foreground]">
          Column is a <strong>non-custodial cryptocurrency wallet</strong>. This means you are in full control of your digital assets at all times.
        </p>
        <ul className="list-inside list-disc space-y-2 text-[--muted-foreground] marker:text-[--text-primary]">
          <li>We <strong>do not</strong> have access to your private keys.</li>
          <li>We <strong>do not</strong> have access to your secret recovery phrase (seed phrase).</li>
          <li>We <strong>cannot</strong> recover your funds or keys if you lose them.</li>
          <li>We <strong>cannot</strong> initiate or reverse transactions on your behalf.</li>
        </ul>
      </>
    ),
  },
  {
    title: "3. Information We Do Not Collect",
    icon: <EyeOff className="size-6 text-[--text-primary]" />,
    content: (
      <>
        <p className="mb-4 text-[--muted-foreground]">
          To maximize your privacy, we strictly limit the data our software records. We never collect or transmit:
        </p>
        <div className="grid gap-3 sm:grid-cols-2">
          {[
            "Private Keys or Seed Phrases",
            "Passwords or PINs",
            "Your IP Address (unless strictly required for RPC routing)",
            "Personally Identifiable Information (PII) like your name or email",
          ].map((item, id) => (
            <div key={id} className="flex items-center gap-2 rounded-lg border border-[--border] bg-[--surface-secondary] p-3">
              <CheckCircle className="size-4 text-green-500" />
              <span className="text-sm font-medium text-[--text-primary]">{item}</span>
            </div>
          ))}
        </div>
      </>
    ),
  },
  {
    title: "4. Information We May Collect",
    icon: <Database className="size-6 text-[--text-primary]" />,
    content: (
      <>
        <p className="mb-4 text-[--muted-foreground]">
          Due to the inherent nature of specific software operations, we or our third-party infrastructure providers might temporarily process:
        </p>
        <ul className="list-inside list-disc space-y-2 text-[--muted-foreground]">
          <li>
            <strong className="text-[--text-primary]">Public Wallet Addresses:</strong> To fetch balances and facilitate transactions via public blockchain nodes.
          </li>
          <li>
            <strong className="text-[--text-primary]">Transaction Hashes:</strong> To monitor and display the status of your broadcasted transactions.
          </li>
          <li>
            <strong className="text-[--text-primary]">Anonymized Error Logs:</strong> Crash reports that help us fix bugs (only if you opt-in to diagnostic sharing).
          </li>
        </ul>
      </>
    ),
  },
  {
    title: "5. Blockchain Transparency",
    icon: <Lock className="size-6 text-[--text-primary]" />,
    content: (
      <>
        <p className="mb-4 text-[--muted-foreground]">
          Please be aware that blockchain networks (like Ethereum, Bitcoin, Solana, Aptos, etc.) are public ledgers. 
          When you use Column to broadcast a transaction, the details of that transaction—including your public address, 
          the amount transferred, and the smart contracts interacted with—become permanently visible to the public.
        </p>
        <p className="text-[--muted-foreground]">
          We have no control over public blockchain networks and cannot alter or delete data that is recorded on-chain.
        </p>
      </>
    ),
  },
];

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen pb-24 pt-16">
      <div className="container mx-auto px-6 md:max-w-4xl">
        {/* Header Section */}
        <div className="mb-16 flex flex-col items-center text-center">
          <div className="mb-8 rounded-2xl bg-[rgba(255,255,255,0.05)] p-4 ring-1 ring-[--border] backdrop-blur-md">
            <img
              src="/Column.png"
              alt="Column Logo"
              width={200}
              height={50}
              className="h-12 w-auto object-contain"
            />
          </div>
          <h1 className="mb-6 text-4xl font-extrabold tracking-tight text-[--text-primary] sm:text-5xl lg:text-6xl">
            Privacy Policy
          </h1>
          <p className="max-w-2xl text-lg text-[--muted-foreground] sm:text-xl">
            As a decentralized and non-custodial wallet, your privacy and security are our highest priority. 
            Here is everything you need to know about how we handle your data.
          </p>
          <div className="mt-8 flex items-center justify-center gap-2 rounded-full border border-[--border] bg-[var(--surface-secondary)] px-4 py-1.5 text-sm font-medium text-[--text-primary]">
            <span>Last Updated: February 21, 2026</span>
          </div>
        </div>

        {/* Content Section */}
        <div className="mb-12 space-y-8">
          {POLICY_SECTIONS.map((section, idx) => (
            <div 
              key={idx}
              className="group relative overflow-hidden rounded-2xl border border-[--border] bg-[rgba(255,255,255,0.02)] p-6 transition-colors hover:bg-[rgba(255,255,255,0.04)] sm:p-8"
            >
              <div className="mb-4 flex items-center gap-4">
                <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-[var(--border)] transition-transform group-hover:scale-110 group-hover:bg-[rgba(255,255,255,0.1)]">
                  {section.icon}
                </div>
                <h2 className="text-2xl font-bold tracking-tight text-[--text-primary]">
                  {section.title}
                </h2>
              </div>
              <div className="ml-0 sm:ml-16">
                {section.content}
              </div>
            </div>
          ))}
        </div>

        {/* Footer Contact */}
        <div className="rounded-2xl bg-[var(--text-primary)] p-8 text-center sm:p-12">
          <h3 className="mb-4 text-2xl font-bold text-[var(--surface-primary)]">
            Have questions?
          </h3>
          <p className="mx-auto mb-8 max-w-lg text-[var(--surface-secondary)]">
            If you have any further questions about our Privacy Policy or our data practices, 
            please feel free to reach out to our community or support team.
          </p>
          <a
            href="mailto:privacy@column.org"
            className="inline-flex h-12 items-center justify-center rounded-xl bg-[var(--surface-primary)] px-8 text-sm font-semibold text-[var(--text-primary)] transition-transform hover:scale-105"
          >
            Contact Support
          </a>
        </div>
      </div>
    </div>
  );
}
