import React, { Component} from 'react';
import { connect } from 'react-redux';
//import ContactList from '../components/contact-list';
import { fetchContacts } from '../actions/contact-actions';



class ContactListPage extends Component {

  componentDidMount() {
    this.props.fetchContacts();
    
  }

  render() {
    
    return (
      <div>
        <h1>List of Contacts</h1>
        <h2>{this.props.contacts.name && this.props.contact.name.first
          //still getting error. "this.props.contacts.name" alone works
          }</h2>
        <h2>{this.props.contacts.address.city}</h2>
      </div>
    )
  }
}

// Make contacts  array available in  props
function mapStateToProps(state) {
  return {
      contacts : state.contactStore.contacts
  }
}

export default connect(mapStateToProps, {fetchContacts})(ContactListPage);