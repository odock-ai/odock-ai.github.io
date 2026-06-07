"use client";

import { useMemo, useState } from "react";
import { CheckCircle2, Server } from "lucide-react";
import { CodeSnippet } from "@/components/shared/code-snippet";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import type { SiteContent } from "@/lib/i18n";

type MCPGatewayCodeSectionProps = {
  content: SiteContent["mcpGatewayPage"]["sections"]["gateway"];
};

export function MCPGatewayCodeSection({ content }: MCPGatewayCodeSectionProps) {
  const [activeMethod, setActiveMethod] = useState<string>(content.methods[0].id);

  const activeExample = useMemo(
    () => content.methods.find((method) => method.id === activeMethod) ?? content.methods[0],
    [activeMethod, content.methods]
  );

  return (
    <section className="relative overflow-hidden py-24" id="mcp-gateway">
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-background/80 via-transparent to-background/80" />
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-background/80 via-transparent to-background/80" />
      <div className="relative z-10 mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mb-10 max-w-3xl">
          <div className="mb-4 flex items-center gap-3">
            <div className="h-px max-w-12 flex-1 bg-primary" />
            <span className="text-[10px] uppercase tracking-widest text-primary">
              {content.eyebrow}
            </span>
          </div>
          <h2 className="text-3xl font-medium tracking-tight text-foreground lg:text-4xl">
            {content.title}
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
            {content.description}
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[340px_minmax(0,1fr)] lg:items-start">
          <div className="self-start border border-border bg-card p-6">
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center border border-primary/30 bg-primary/10">
                <Server className="h-5 w-5 text-primary" />
              </div>
              <h3 className="text-lg font-medium text-foreground">{content.featureTitle}</h3>
            </div>
            <ul className="space-y-3">
              {content.features.map((feature) => (
                <li key={feature} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="overflow-hidden border border-border bg-card">
            <Tabs value={activeMethod} onValueChange={setActiveMethod} className="gap-0">
              <div className="border-b border-border px-4 py-3">
                <TabsList className="h-auto flex-wrap justify-start gap-2 rounded-none border-0 bg-transparent p-0">
                  {content.methods.map((method) => (
                    <TabsTrigger
                      key={method.id}
                      value={method.id}
                      className="border border-border bg-background px-3 py-2 text-[10px] uppercase tracking-wider data-[state=active]:border-chart-2 data-[state=active]:bg-chart-2/10 data-[state=active]:text-chart-2"
                    >
                      {method.label}
                    </TabsTrigger>
                  ))}
                </TabsList>
              </div>

              {content.methods.map((method) => (
                <TabsContent key={method.id} value={method.id} className="m-0">
                  <CodeSnippet
                    filename={method.filename}
                    code={method.code}
                    copyLabel={content.copyLabel}
                    copiedLabel={content.copiedLabel}
                  />
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
}
