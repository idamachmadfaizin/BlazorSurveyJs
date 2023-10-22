import { QuestionRankingModel, ItemValue } from "survey-core";
export declare class QuestionRanking extends QuestionRankingModel {
    private _implementor;
    protected onBaseCreating(): void;
    dispose(): void;
    koHandleKeydown: (data: ItemValue, event: KeyboardEvent) => boolean;
    koHandlePointerDown: (data: ItemValue, event: PointerEvent) => boolean;
}
