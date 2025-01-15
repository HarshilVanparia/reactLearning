import * as React from "react";
class MyComponent extends React.Component {
    render() {
        return (
            <div>
                
                <form method="get">
                    <h1 >Register</h1>
                    <label>
                        Name:
                        <input type="text" name="name"  required />
                    </label>
                    <label>
                        Email:
                        <input type="email" name="email" required />
                    </label>
                    <label>
                        Password:
                        <input type="password" name="password" required />
                    </label>
                    <input type="submit" value="Submit" />
                </form>
                .
                
            </div>
        );
    }
}
export default MyComponent;