"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class PaginationService {
    page(items, pageNumber, pageSize) {
        const initialPos = pageNumber * pageSize;
        return items.slice(initialPos, initialPos + pageNumber);
    }
}
exports.default = PaginationService;
//# sourceMappingURL=paginationService.js.map