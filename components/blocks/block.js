export default function Block({children, blockId, classes = 'py-8 lg:py-20'}) {
    return (
        <section id={blockId} className={`${classes}`}>
            {children}
        </section>
    )
}