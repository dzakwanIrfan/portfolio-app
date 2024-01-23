export default function SubHead({text}: {text: string}) {
    return (
        <div className="bg-head">
            <div className="head" dangerouslySetInnerHTML={{ __html: text }}></div>
        </div>
    );
}