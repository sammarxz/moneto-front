import { lazy, Suspense } from "react";
import { dynamicIconImports, LucideProps } from "lucide-react";
import { Box } from "theme-ui";

interface TransactionIconProps extends Omit<LucideProps, "ref"> {
  name: keyof typeof dynamicIconImports;
}

const fallback = (
  <Box sx={{ bg: "gray.medium", width: 24, height: 24, borderRadius: 8 }} />
);

export function TransactionIcon({ name, ...props }: TransactionIconProps) {
  const LucideIcon = lazy(dynamicIconImports[name]);

  return (
    <Suspense fallback={fallback}>
      <LucideIcon {...props} />
    </Suspense>
  );
}
