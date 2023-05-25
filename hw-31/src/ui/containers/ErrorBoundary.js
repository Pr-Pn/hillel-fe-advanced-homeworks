import {Component} from "react";

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false
        }
    }

    static getDerivedStateFromError() {
        return {
            hasError: true
        }
    }

    // componentDidCatch(error, errorInfo) {
    //     console.log(error, errorInfo)
    // }

    render() {
        const {hasError} = this.state;
        const {children} = this.props;
        return hasError ? <h1>Щось тут не так...</h1> : children;
    }
}

export default ErrorBoundary;