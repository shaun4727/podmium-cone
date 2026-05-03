import Image from 'next/image';

export const TransformationStory = () => {
    return (
        <div>
            <h1>a mental transformation story: andrew nicols</h1>
            <div className="w-1/2">
                <Image
                    src="/public/pod-images/quote.svg"
                    width="200"
                    height="200"
                    alt="quotation"
                />
                <p>
                    "My ninth grade year, I experienced a lot of burnout. I was dreading the sport,
                    feeling a lot of pressure, and it was taking a toll on me. I just wasn't
                    positive anymore and really hated running - which was sad because it's something
                    I've always loved doing."
                </p>
                <p>- nicols,Cross Country Runner, 10th Grade</p>
                <p>
                    Haley came to Jordan as a sophomore struggling with intense self-imposed
                    pressure. Her entire sense of worth had become tied to her race times—and when
                    those times didn't meet her expectations, her love for running began to fade.
                </p>
                <p>
                    "My worth for running was only determined by the times I was running and nothing
                    else. It got to a point where my friends started to notice I was struggling a
                    lot."
                </p>
            </div>
            <div className="w-1/2">
                <Image
                    src="/public/pod-images/transformation-story.jpg"
                    width="400"
                    height="500"
                    alt="transformation-story"
                />
            </div>
        </div>
    );
};
