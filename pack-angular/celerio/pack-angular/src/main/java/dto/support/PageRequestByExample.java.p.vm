$output.java("${Root.packageName}.dto.support","PageRequestByExample")##

$output.require("org.springframework.data.domain.Example")##
$output.require("org.springframework.data.domain.Pageable")##

public class PageRequestByExample<DTO> {
    public DTO example;
    public LazyLoadEvent lazyLoadEvent;

    public Pageable toPageable() {
        return lazyLoadEvent != null ? lazyLoadEvent.toPageable() : null;
    }
}