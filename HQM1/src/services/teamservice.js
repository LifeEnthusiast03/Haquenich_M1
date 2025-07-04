export const teamService = {
  async getTeamMembers() {
    try {
      const response = await fetch('http://localhost:5000/api/team', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      
      return {
        success: true,
        data: result.data || [],
        message: result.message || 'Team data fetched successfully',
        count: result.count || 0
      };
    } catch (error) {
      console.error('Error fetching team members:', error);
      return {
        success: false,
        data: [],
        message: error.message || 'Failed to fetch team data',
        count: 0
      };
    }
  }
};