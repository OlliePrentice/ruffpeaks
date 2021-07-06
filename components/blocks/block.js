export default function block({children, blockId, padding = 'py-20'}) {
    return (
        <section id={blockId} className={`${padding}`}>
            {children}
        </section>
    )
}