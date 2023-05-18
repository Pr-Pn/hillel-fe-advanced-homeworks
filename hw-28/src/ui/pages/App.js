import '../../index.css';
import React from 'react';

import Wrapper from '../containers/Wrapper';
import Smile from '../components/Smile';

import logo1 from '../img/smile_2.svg';
import logo2 from '../img/smile_3.svg';
import logo3 from '../img/smile_1.svg';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            reactions: [
                {
                    id: 'happy',
                    count: 0,
                    logo: logo1
                },
                {
                    id: 'sad',
                    count: 0,
                    logo: logo2
                },
                {
                    id: 'arestovych',
                    count: 0,
                    logo: logo3
                }
            ]
        }
    }

    handleReactionClick(id) {
        const updatedReactions =
        this.state.reactions.map(reaction => {
            if (reaction.id === id) {
                reaction.count++;
            }
            return reaction;
            })
        this.setState({
                reaction: updatedReactions
        });
    }
    handleShowResultClick() {
        let result;
        let maxCount = 0;
        this.state.reactions.forEach(reaction => {
            if (reaction.count > 0 && reaction.count > maxCount) {
                result = reaction;
                maxCount = reaction.count;
            }
        })
        if (result) {
            this.setState({
                winner: result
            })
        }
    }

    render() {
        const winner = this.state.winner;
        return (
            <>
                <Wrapper>
                    {this.state.reactions.map((reaction) =>
                        <Smile
                            key={reaction.id}
                            id={reaction.id}
                            logo={reaction.logo}
                            count={reaction.count}
                            handleClick={(id) => this.handleReactionClick(id)}
                        />
                    )}
                    <div className="result">
                        <button onClick={() => this.handleShowResultClick()}>Show Result</button>
                        {(winner) && <img className="smile_res" src={winner.logo}/>}
                    </div>

                </Wrapper>
            </>
        );
    }
}

export default App;