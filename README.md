# Dashboard Project

## **Approach to Building the Dashboard**
- Designed a dynamic dashboard for managing complaints based on user roles such as **JEs**.
- Implemented filtering options using tabs to organize cases into categories like "Open", "Closed", and "Pending".
- Dynamically displayed user-specific data using API calls after login.
- Restricted access to buttons (e.g., **Case Upload**, **Generate Report**, **Broadcast Message**) based on the logged-in user's role.
- Designed the UI with a professional and intuitive layout for better user experience.

---

## **Challenges Faced and Resolutions**

### 1. **Dynamic Role-Based UI**
- **Challenge**: Conditionally hiding buttons for specific roles.
- **Resolution**: Added conditional rendering logic in React using a `role` property fetched from the API.

### 2. **Fetching and Displaying User-Specific Data**
- **Challenge**: API response delays caused data inconsistencies on the dashboard.
- **Resolution**: Introduced loading states and error handling mechanisms in API calls to ensure smooth rendering.

### 3. **Routing Integration**
- **Challenge**: React Router was not properly syncing with the dashboard pages.
- **Resolution**: Corrected the routing paths and ensured each page component was registered in the Router.

---

## **Assumptions Made**
1. Users have predefined roles like **Admin**, **JE**, or **Viewer**.
2. The backend API securely provides the logged-in user's details and complaint data.
3. All user actions (like uploading or editing cases) comply with the role-based permissions.

---

## **Tech Stack**
- **Frontend**: React (Vite Framework)
- **Backend**: Node.js with Express (API Integration)
- **Database**: MongoDB

---

## **How to Run the Project**
1. Clone the repository:  
   ```bash
   git clone <repository-url>
   cd project-directory
