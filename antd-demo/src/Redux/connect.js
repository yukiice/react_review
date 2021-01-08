import React, { PureComponent } from "react";

import store from "../flow";
import { StoreContext } from "./context";
export function connect(mapStateToProps, mapDispatchToProps) {
  return function enhanceHOC(WarppedComponent) {
    class EnhanceComponent extends PureComponent {
      constructor(props,context) {
        super(props,context);
        this.state = {
          storeState: mapStateToProps(context.getState()),
        };
      }
      componentDidMount() {
        this.unsubscribe = this.context.subscribe(() => {
          this.setState({
            storeState: mapStateToProps(this.context.getState()),
          });
        });
      }
      componentWillUnmount() {
        this.unsubscribe();
      }
      render() {
        return (
          <WarppedComponent
            {...this.state}
            {...mapStateToProps(this.context.getState())}
            {...mapDispatchToProps(this.context.dispatch)}
          ></WarppedComponent>
        );
      }
    }
    EnhanceComponent.contextType = StoreContext;
    return EnhanceComponent;
  };
}
