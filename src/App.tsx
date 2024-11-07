import {useEffect, useState} from 'react'
import './App.css'
import {useCastVote} from "./services/use-cast-vote.ts";
import classNames from 'classnames';

export const App = () => {
    const [vote, setVote] = useState("");
    const [count, setCount] = useState(0);
    const [visible, setVisible] = useState(false);
    const {castVote} = useCastVote();

    const castYourVote = (vote: string) => {
        setCount(prev => prev + 1);
        setVote(vote);
        void castVote(vote);
        setVisible(true);
    }

    useEffect(() => {
        if(visible) {
            setVisible(false);
        }
    }, [visible]);

    return (
        <>
            <div className={"flex-col space-y-10"}>
                <h1 className={"text-xl font-large text-gray-700"}>Cast your vote</h1>
                <div className={"block flex items-center space-x-4"}>
                    <button className="group block flex-shrink-0" onClick={() => castYourVote("Elmer J. Fudd")}>
                        <div className="flex items-center">
                            <div>
                                <img
                                    alt=""
                                    src="/vote/fudd.png"
                                    className="inline-block h-20 w-20 rounded-full"
                                />
                            </div>
                            <div className="ml-3">
                                <p className="text-sm font-medium text-gray-700 group-hover:text-gray-900">Elmer J. Fudd</p>
                                <p className="text-xs font-medium text-gray-500 group-hover:text-gray-700">Archenemy of Bugs Bunny</p>
                            </div>
                        </div>
                    </button>
                    <button className="group block flex-shrink-0" onClick={() => castYourVote("Bugs Bunny")}>
                        <div className="flex items-center">
                            <div>
                                <img
                                    alt=""
                                    src="/vote/bugs.jpg"
                                    className="inline-block h-20 w-20 rounded-full"
                                />
                            </div>
                            <div className="ml-3">
                                <p className="text-sm font-medium text-gray-700 group-hover:text-gray-900">Bugs Bunny</p>
                                <p className="text-xs font-medium text-gray-500 group-hover:text-gray-700">American cartoon character</p>
                            </div>
                        </div>
                    </button>
                </div>
                <div className={"relative h-12"}>
                {vote && <p key={count}
                    className={classNames(
                        "text-xl font-large text-gray-700 transition ease-in-out delay-150",
                        {
                            "fadeOut": !visible,
                            "fadeIn": visible
                        })}>You voted for {vote}</p>}
                </div>
            </div>
        </>
    )
}
