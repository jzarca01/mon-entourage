import React, { Component } from 'react'

export default class Filter extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          trigger: false,
        };
    
        this.triggerNext = this.triggerNext.bind(this);
      }
    
      componentWillMount() {
        const { filterType } = this.props;
        switch(filterType) {
          case 'ask_for_help':
            this.props.filterFeeds('ask_for_help')
            this.triggerNext()
            break;
          case 'contribution':
            this.props.filterFeeds('contribution')
            this.triggerNext()
            break;
          case 'none':
            this.props.resetFilter()
            this.triggerNext()
            break;
          default:
            break;
        }
      }
    
      triggerNext() {
        this.setState({ trigger: true }, () => {
          this.props.triggerNextStep();
        });
      }
    
      render() { 
        const { filterType } = this.props;   
        return (
          <div className="Filter">
          {filterType !== 'none' ? 
           `D'accord, je n'afficherai uniquement que les ${filterType === 'contribution' ? 'contributions' : `demandes d'aide`} sur la carte.` : 
           `D'accord, toutes les actions solidaires répertoriées sont désormais affichées sur la carte.`
          }
          </div>
        );
      }
}
