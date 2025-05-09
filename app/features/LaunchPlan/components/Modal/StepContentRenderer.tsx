interface Props {
  content: {
    title?: string;
    steps?: { title: string; items: string[] }[];
    tips?: string[];
    captions?: string[];
    scripts?: string[];
    templates?: string[];
  };
}

export default function StepContentRenderer({ content }: Props) {
  return (
    <div className="space-y-6">
      {content.steps?.map((group, i) => (
        <div key={i}>
          <h4 className="text-white font-medium text-sm mb-2">{group.title}</h4>
          <ul className="text-sm text-zinc-300 list-disc pl-5 space-y-1">
            {group.items.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>
      ))}

      {content.tips && (
        <div>
          <h4 className="text-white font-medium text-sm mb-2">Tips</h4>
          <ul className="text-sm text-zinc-300 list-disc pl-5 space-y-1">
            {content.tips.map((tip, i) => (
              <li key={i}>{tip}</li>
            ))}
          </ul>
        </div>
      )}

      {content.captions && (
        <div>
          <h4 className="text-white font-medium text-sm mb-2">
            Captions to Use
          </h4>
          <ul className="text-sm text-zinc-300 list-disc pl-5 space-y-1">
            {content.captions.map((c, i) => (
              <li key={i}>{c}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
