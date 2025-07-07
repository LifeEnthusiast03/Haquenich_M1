import ChatbotService from "../service/chatservice.js";

const  chatResponse = async (req, res)=>{
  const { message, conversationHistory = [] } = req.body;

    if (!message || message.trim() === '') {
      return res.status(400).json({ error: 'Message is required' });
    }
    if (conversationHistory && !Array.isArray(conversationHistory)) {
  return res.status(400).json({ error: 'conversationHistory must be an array' });
}
    const bot = new ChatbotService();
    try{
      const response = await bot.generateResponse(message, conversationHistory);
      res.json(response);
    }
    catch(error){
      console.error('Chat controller error:', error);
          res.status(500).json({ 
    error: 'Internal server error',
    ...(process.env.NODE_ENV === 'development' && { details: error.message })
  });
    }
}

export default chatResponse;