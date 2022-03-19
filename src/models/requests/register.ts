export type RegisterSchema = {
    // Id: string;
    email: string;
    password: string;
    profile: {
        first_name: string;
        last_name: string;
        contact_number: string;
        age: number;
        gender: string;
        preferred_force: string;    
        hsc_batch: string;
        college: string;
        guardian_name: string;
        guardian_contact_number: string;
    }
    // confirm_password: string;
  };