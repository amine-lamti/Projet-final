import React from 'react';
import { connect } from 'react-redux';
import { loadUser } from '../actions/AuthActions'

class Acceuil extends React.Component {
    componentDidMount() {
        this.props.loadUser()
    }
    render(){
    return (
        <div>
UUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUU
Lorem ipsum, dolor sit a
Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus laudantium dignissimos, amet ducimus nam voluptatibus quos aut vel adipisci quod modi doloribus impedit neque fuga suscipit, reiciendis, sequi soluta nesciunt?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus laudantium dignissimos, amet ducimus nam voluptatibus quos aut vel adipisci quod modi doloribus impedit neque fuga suscipit, reiciendis, sequi soluta nesciunt?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus laudantium dignissimos, amet ducimus nam voluptatibus quos aut vel adipisci quod modi doloribus impedit neque fuga suscipit, reiciendis, sequi soluta nesciunt?met consectetur adipisicing elit. Repellendus laudantium dignissimos, amet ducimus nam voluptatibus quos aut vel adipisci quod modi doloribus impedit neque fuga suscipit, reiciendis, sequi soluta nesciunt?

        </div>
    )
  }
}


export default connect(null, { loadUser })(Acceuil)