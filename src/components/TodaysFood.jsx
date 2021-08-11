import React, {Component} from 'react';


class TodaysFood extends React.Component {
    state = {
        food: [],
        calories: 0,
    }

    render() {
        return(
            <div>
                <h2>Today's Food</h2>
                <div>
                    <div>

                    </div>
                    <div>
                        Total : {this.state.calories} Calories
                    </div>
                </div>
            </div>
        )
    }
}

export default TodaysFood