"use client";

import {
  ContributionGraph,
  ContributionGraphBlock,
  ContributionGraphCalendar,
  ContributionGraphFooter,
  ContributionGraphLegend,
  ContributionGraphTotalCount,
  type Activity,
} from "@/components/ui/kibo-ui/contribution-graph";

interface ContributionsProps {
  data: Activity[];
}

export function Contributions({ data }: ContributionsProps) {
  return (
    <div className="w-full">
      <ContributionGraph data={data} className="mx-auto">
        <ContributionGraphCalendar>
          {({ activity, dayIndex, weekIndex }) => (
            <ContributionGraphBlock
              key={`${weekIndex}-${dayIndex}`}
              activity={activity}
              dayIndex={dayIndex}
              weekIndex={weekIndex}
              className="
                data-[level='0']:fill-muted
                data-[level='1']:fill-green-200
                data-[level='2']:fill-green-300
                data-[level='3']:fill-green-400
                data-[level='4']:fill-green-500
                hover:ring-2 hover:ring-green-500/50 transition-all duration-200
              "
            />
          )}
        </ContributionGraphCalendar>
        <ContributionGraphFooter>
          <ContributionGraphTotalCount />
          <ContributionGraphLegend>
            {({ level }) => (
              <svg height={12} width={12}>
                <rect
                  height={12}
                  width={12}
                  rx={2}
                  ry={2}
                  className={
                    level === 0
                      ? "fill-muted stroke-[1px] stroke-border"
                      : level === 1
                      ? "fill-green-200"
                      : level === 2
                      ? "fill-green-300"
                      : level === 3
                      ? "fill-green-400"
                      : "fill-green-500"
                  }
                />
              </svg>
            )}
          </ContributionGraphLegend>
        </ContributionGraphFooter>
      </ContributionGraph>
    </div>
  );
}
