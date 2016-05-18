$output.java("${Root.packageName}.rest.support","PageResponse")##

import org.springframework.data.domain.Page;

import java.util.List;

public class PageResponse<T> {

    public final int totalPages;
    public final long totalElements;
    public final List<T> content;

    public PageResponse(Page<T> page) {
        this.totalPages = page.getTotalPages();
        this.totalElements = page.getTotalElements();
        this.content = page.getContent();
    }
}
