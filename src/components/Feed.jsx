import Story from "./Story";
export default function Feed({ stories }) {

    return (
        <>
            <div className='feed'>
                {stories && stories.map((story, id) => {
                    console.log(story)
                    return (<>
                        <Story story={story} />
                    </>)
                })}
            </div>
        </>
    );
}