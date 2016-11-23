var Comment=React.createClass({
    getInitialState(){
        return {data:[]};
    },
    handleClick(){
        this.state.data.push(this.refs['myInput'].value);
        this.setState({data:this.state.data})
        this.refs['myInput'].value='';
    },
    render(){
        return(
            <div className="panel panel-default">
                <div className="panel-heading text-center"><h4>珠峰留言板</h4></div>
                <div className="panel-body">
                    <ul className="list-group">
                        {this.state.data.map(function (item,index) {

                            return  <li className="list-group-item" key={index}>{item}</li>
                        })}
                    </ul>
                </div>
                <div className="panel-footer">
                    <div className="row">
                        <div className="col-xs-11">
                            <input type="text" className="form-control" ref="myInput"  />
                        </div>
                        <div className="col-xs-1">
                            <button className="btn btn-primary" onClick={this.handleClick}>留言</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
});
ReactDOM.render(<Comment></Comment>,document.getElementById('app'));

