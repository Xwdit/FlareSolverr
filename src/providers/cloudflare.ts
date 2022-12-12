import {Response} from 'puppeteer'
import {Page} from "puppeteer-extra/dist/puppeteer";

import log from "../log";
import getCaptchaSolver, {CaptchaType} from "../captcha";

/**
 *  This class contains the logic to solve protections provided by CloudFlare
**/

const CHALLENGE_SELECTORS = ['#trk_jschal_js', '.ray_id', '.attack-box', '#cf-please-wait'];
const TOKEN_INPUT_NAMES = ['g-recaptcha-response', 'h-captcha-response'];

export default async function resolveChallenge(url: string, page: Page, response: Response): Promise<Response> {
  return response;
}
