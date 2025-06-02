import { cn } from '@/lib/utils';
import { cva, type VariantProps } from 'class-variance-authority';

const spinnerVariants = cva(
  'animate-spin rounded-full border-2 border-current border-t-transparent',
  {
    variants: {
      size: {
        sm: 'h-4 w-4',
        md: 'h-8 w-8',
        lg: 'h-12 w-12',
        xl: 'h-16 w-16',
      },
      variant: {
        default: 'text-primary',
        secondary: 'text-secondary-foreground',
        destructive: 'text-destructive',
        outline: 'text-border',
      },
    },
    defaultVariants: {
      size: 'md',
      variant: 'default',
    },
  }
);

export interface LoadingSpinnerProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof spinnerVariants> {}

const LoadingSpinner = ({
  className,
  size,
  variant,
  ...props
}: LoadingSpinnerProps) => {
  return (
    <div
      className={cn(spinnerVariants({ size, variant, className }))}
      {...props}
    />
  );
};

export { LoadingSpinner, spinnerVariants };
