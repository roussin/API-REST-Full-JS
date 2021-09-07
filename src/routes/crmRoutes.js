import { runInNewContext } from "vm";
import { addNewContact, getContacts, getContactWithID, updateContact, deleteContact } from '../controllers/crmControllers';

const routes = (app) => {
    app.route('/contact')
        /**
         * requête GET -> middleware -> envoie
         */
        .get((req, res, next) => {
            // middleware
            console.log(`Request de: ${req.originalUrl}`)
            console.log(`Request type: ${req.method}`)
            next();
            }, getContacts)

        .post(addNewContact);

    app.route('/contact/:contactId')
        // contact with ID
        .get(getContactWithID)
        // mise à jour contact
        .put(updateContact)
        // suppression contact
        .delete(deleteContact);
}

export default routes;