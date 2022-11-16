export default class PaginationService {

    public page(items: any, pageNumber: number, pageSize: number) {
        const initialPos = pageNumber * pageSize;
        return items.slice(initialPos, initialPos + pageNumber);
    }
}
