$output.java("${Root.packageName}.rest.support","PageRequestByExample")##

$output.require("org.springframework.data.domain.Example")##
$output.require("org.springframework.data.domain.Pageable")##

public class PageRequestByExample<E> {

    public E entity;
    public LazyLoadEvent lazyLoadEvent;

    public Example<E> toExample() {
        return entity != null ? Example.of(entity) : null;
    }

    public Pageable toPageable() {
        return lazyLoadEvent != null ? lazyLoadEvent.toPageable() : null;
    }
}