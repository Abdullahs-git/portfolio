'use client';
import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface BentoGridProps {
  children: ReactNode;
  className?: string;
  columns?: 4 | 5 | 6 | 12;
}

export const BentoGrid = ({ children, className, columns = 4 }: BentoGridProps) => {
  const colsMap = {
    4: 'lg:grid-cols-4',
    5: 'lg:grid-cols-5',
    6: 'lg:grid-cols-6',
    12: 'lg:grid-cols-12',
  };

  return (
    <div
      className={cn(
        'grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6',
        colsMap[columns],
        className
      )}
    >
      {children}
    </div>
  );
};

interface BentoCellProps {
  children: ReactNode;
  className?: string;
  colSpan?: 1 | 2 | 3 | 4 | 5 | 6;
  rowSpan?: 1 | 2 | 3;
  mdColSpan?: 1 | 2;
}

export const BentoCell = ({
  children,
  className,
  colSpan = 1,
  rowSpan = 1,
  mdColSpan,
}: BentoCellProps) => {
  const colSpanMap: Record<number, string> = {
    1: 'lg:col-span-1',
    2: 'lg:col-span-2',
    3: 'lg:col-span-3',
    4: 'lg:col-span-4',
    5: 'lg:col-span-5',
    6: 'lg:col-span-6',
  };

  const rowSpanMap: Record<number, string> = {
    1: 'row-span-1',
    2: 'row-span-2',
    3: 'row-span-3',
  };

  const mdColSpanMap: Record<number, string> = {
    1: 'md:col-span-1',
    2: 'md:col-span-2',
  };

  return (
    <div
      className={cn(
        colSpanMap[colSpan],
        rowSpanMap[rowSpan],
        mdColSpan && mdColSpanMap[mdColSpan],
        className
      )}
    >
      {children}
    </div>
  );
};
