
import { useTranslation } from "react-i18next";
import { StatCard } from "./components/StatCard";

interface StatsGridProps {
    operations: string[];
    currentOp: number;
    stackA: number;
    stackB: number;
}

export const StatsGrid = ({ operations, currentOp, stackA, stackB }: StatsGridProps) => {
    const { t } = useTranslation();

    return (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            <StatCard label={t("stats.operations")} value={operations.length} />
            <StatCard label={t("stats.progress")} valueColor="text-blue-500">
                {currentOp}/{operations.length}
            </StatCard>
            <StatCard label={t("stats.stackA")} value={stackA} valueColor="text-green-500" />
            <StatCard label={t("stats.stackB")} value={stackB} valueColor="text-red-500" />
        </div>
    );
};
