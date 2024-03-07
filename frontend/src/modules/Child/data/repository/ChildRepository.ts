import { ChildService } from "@/modules/Child/config/services/ChildService";
import { IGetChildRequest } from "@/modules/Child/data/models/request/IGetChildRequest";


export namespace ChildRepository {
    export function getChildByCode(getChildRequest: IGetChildRequest) {
        return ChildService.getChildByCode(getChildRequest);
    }
}