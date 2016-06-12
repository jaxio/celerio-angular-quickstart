$output.java("${Root.packageName}.dto.support","PageResponse")##

import java.util.List;

public class PageResponse<T> {

    public final int totalPages;
    public final long totalElements;
    public final List<T> content;

    public PageResponse(int totalPages, long totalElements, List<T> content) {
        this.totalPages = totalPages;
        this.totalElements = totalElements;
        this.content = content;
    }
}
