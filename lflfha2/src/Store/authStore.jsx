import { create } from 'zustand'
import { createJSONStorage, persist } from "zustand/middleware";

const useAuthStore = create(
  persist(
    (set, get) => ({
      isAuthenticated: false,
      accessToken: "",
      signUp: async(formData) => {console.log("signUp",formData)
      try{
        const res = await fetch('http://localhost:3001/user/signup', {
          method: 'POST',
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData)
        });
        if (!res.ok) {
            const errorMessage = await res.text();
            throw new Error(errorMessage);
        }
        const responseData = await res.json();
        console.log(responseData);
        set({                                       
          isAuthenticated: true,
          accessToken: responseData.accessToken,
        });
    
window.location.href= "/";
} catch (err) {
console.log(err.message);
}
    },

      login: async(credentials) => {console.log("login",credentials)
      try {
        const responseData = await fetch('http://localhost:3001/user/signin', {
          method: 'POST',
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(credentials)
        }).then((data)=>data.json());
         console.log(responseData,"hakeema")

        set({
          isAuthenticated: true,
          accessToken: responseData.accessToken,
        });

        window.location.href= "/";
      } catch (err) {
        console.log(err.message);
      }
    },

      logout: async () => {
        // console.log("logout")
        try {
          const responseData = await fetch('http://localhost:3001/user/signout', {
            method: 'POST',
            headers: {
              "Content-Type": "application/json",
             "Authorization": `Bearer ${get().accessToken}`,
            },
            
          })
           
          set({
            isAuthenticated: false,
            accessToken: "",
          });
  
        } catch (err) {
          console.log(err.message);
        }
      },

      // getUserProfile: async () => {
      //   // console.log("logout")
      //   try {
      //     const responseData = await fetch('http://localhost:3001/user/signout', {
      //       method: 'POST',
      //       headers: {
      //         "Content-Type": "application/json",
      //        "Authorization": `Bearer ${get().accessToken}`,
      //       },
            
      //     })
           
      //     set({
      //       isAuthenticated: false,
      //       accessToken: "",
      //     });
  
      //   } catch (err) {
      //     console.log(err.message);
      //   }
      // },


      handleAuthenticatedRequest: async ({
        url,
        body,
        method,
      }) => {
       
      },
      
    }),
    {
      name: "auth-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useAuthStore;


// import { create } from 'zustand'
// import { createJSONStorage, persist } from "zustand/middleware";

// const useAuthStore = create((set) => ({
//   bears: 0,
//   increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
//   removeAllBears: () => set({ bears: 0 }),
// }))

// export default useAuthStore;