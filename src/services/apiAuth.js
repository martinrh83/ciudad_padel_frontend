import supabase from "./supabase";

export async function signup({ fullName, email, password, phone }) {
  const { data: signUpData, error: signupError } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        fullName,
        phone,
      },
    },
  });

  if (signupError) throw new Error(signupError.message);

  console.log(signUpData);
  const userId = signUpData.user.id;

  const { data: profile, profileError } = await supabase
    .from("profiles")
    .insert([{ id: userId }])
    .select();

  if (profileError) throw new Error(profileError.message);
  console.log(profile);

  return signUpData;
}

export async function login({ email, password }) {
  let { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) throw new Error(error.message);

  console.log(data);
  return data;
}

export async function getCurrentUser() {
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (user) {
    const { data, error } = await supabase
      .from("profiles")
      .select("is_admin")
      .eq("id", user.id)
      .single();
    console.log("data", data);
    if (error) {
      console.error("Error fetching user role:", error);
      return null;
    }
    return { ...user, isAdmin: data.is_admin };
  }
  return null;
}

export async function logout() {
  let { error } = await supabase.auth.signOut();
  if (error) throw new Error(error.message);
}

export async function updateCurrentUser({ fullName, phoneNumber }) {
  const { data, error } = await supabase.auth.updateUser({
    data: { fullName: fullName, phone: phoneNumber },
  });

  if (error) throw new Error(error.message);

  return data;
}
