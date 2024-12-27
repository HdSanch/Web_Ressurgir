export const chatApi = {
    async sendQuestion(question, sessionId, page) {
      try {
        const response = await fetch('http://localhost:5000/api/chat/question', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            question,
            sessionId,  // Anonymous session ID
            page,
            timestamp: new Date().toISOString()
          }),
        });
  
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
  
        return await response.json();
      } catch (error) {
        console.error('Error sending question:', error);
        throw error;
      }
    }
  };