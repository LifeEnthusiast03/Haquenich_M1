import DataService from '../service/dataservice.js' 
const dataservice  = new DataService();

const updateContactData = async (req, res) => {
    try {
        const { name, email, phone, message } = req.body;

        // Validate required fields
        if (!name || !email || !message) {
            return res.status(400).json({
                success: false,
                message: 'Name, email, and message are required fields'
            });
        }

        // Prepare contact data
        const contactData = {
            name,
            email,
            phone: phone || '',
            message
        };

        // Save contact data using DataService
        const savedContact = await dataservice.saveContactData(contactData);
        res.status(200).json({
            success: true,
            message: 'Contact form submitted successfully',
            data: { 
                id: savedContact.id,
                timestamp: savedContact.timestamp 
            }
        });

    } catch (error) {
        console.error('Error processing contact form:', error);
        res.status(500).json({
            success: false,
            message: 'Internal server error. Please try again later.'
        });
    }
}


const getContactData =  async (req, res) => {
    try {
        const contacts = await dataservice.getAllContacts();
        res.status(200).json({
            success: true,
            data: contacts
        });
    } catch (error) {
        console.error('Error fetching contacts:', error);
        res.status(500).json({
            success: false,
            message: 'Error fetching contacts'
        });
    }
};


export {updateContactData,getContactData}
