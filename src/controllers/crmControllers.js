import mongoose from 'mongoose';
import { ContactSchema } from '../models/crmModels';

const Contact = mongoose.model('Contact', ContactSchema);

/**
 * Create | Read | Update | Delete
 */

export const addNewContact = (req, res) => {
    let newContact = new ContactSchema(req.body);

    newContact.save((err, contact) => {
        if (err) {
            res.send(err);
        }
        res.json(contact);
    });
};

export const getContacts = (req, res) => {

    Contact.find((err, contact) => {
        if (err) {
            res.send(err);
        }
        res.json(contact);
    });
};

export const getContactWithID = (req, res) => {

    Contact.findById(req.params.contactId, (err, contact) => {
        if (err) {
            res.send(err);
        }
        res.json(contact);
    });
};

export const updateContact = (req, res) => {

    /**
     * récupération de l'id -> req.params.contactId
     * changement des informations dans la base de donnée -> req.body 
     * option qui permet de mettre à jour l'information dans ma base de donnée -> new: true  
     */
    Contact.findOneAndUpdate({_id: req.params.contactId}, req.body, { new: true }, (err, contact) => {
        if (err) {
            res.send(err);
        }
        res.json(contact);
    });
};

export const deleteContact = (req, res) => {

    /**
     * récupération du contactId qui est dans l'objet req -> req.params.contactId 
     */
    Contact.remove({_id: req.params.contactId}, (err, contact) => {
        if (err) {
            res.send(err);
        }
        res.json({ message: 'Contact effacé avec succès' });
    });
};