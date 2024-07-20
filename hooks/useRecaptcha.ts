import { useScript } from "@/hooks/useScript";

const SITE_KEY = "6LepF-MeAAAAABMWi7tyymnbuWZjc7p7p9WLX2A0";

const useRecaptcha = () => {
  //
  const status = useScript(
    `https://www.google.com/recaptcha/api.js?render=${SITE_KEY}`,
    {
      removeOnUnmount: false,
      id: "recaptcha-key",
    },
  );
  //
  const getCaptchaToken = async () => {
    if (status !== "ready") throw new Error("script is not ready !!!");
    const response = await new Promise((resolve, reject) => {
      window.grecaptcha.ready(() => {
        window.grecaptcha
          .execute(SITE_KEY, { action: "submit" })
          .then((token) => resolve(token))
          .catch((error) => reject(error));
      });
    });
    return response;
  };
  //
  return { status, getCaptchaToken };
};

export default useRecaptcha;
