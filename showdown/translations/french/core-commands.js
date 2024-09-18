"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var core_commands_exports = {};
__export(core_commands_exports, {
  translations: () => translations
});
module.exports = __toCommonJS(core_commands_exports);
const translations = {
  strings: {
    "Server version: <b>${version}</b>": "Version du serveur : <b>${version}</b>",
    "/mee - must not start with a letter or number": "/mee - ne doit pas commencer avec une lettre ou un nombre",
    "What?! How are you not more excited to battle?! Try /battle! to show me you're ready.": "Quoi ? Comment \xE7a se fait que tu ne sois pas plus content que \xE7a de combattre ? Essaie /battle! pour me montrer que tu es pr\xEAt !",
    "Access denied for custom avatar - make sure you're on the right account?": "Acc\xE8s refus\xE9 pour l'avatar personnalis\xE9 - es-tu s\xFBr d'\xEAtre sur le bon compte ?",
    "Invalid avatar.": "Avatar invalide.",
    "Avatar changed to:": "Avatar chang\xE9 pour :",
    "Artist: ": "Artiste : ",
    "No one has PMed you yet.": "Personne ne t'a encore envoy\xE9 de MP.",
    "You forgot the comma.": "Tu as oubli\xE9 la virgule.",
    "User ${targetUsername} not found. Did you misspell their name?": "Aucun ${targetUsername} n'a \xE9t\xE9 trouv\xE9. As-tu bien \xE9crit son pseudo ?",
    "User ${targetUsername} is offline.": "${targetUsername} est hors-ligne.",
    'The user "${targetUsername}" was not found.': `L'utilisateur "\${targetUsername}" n'a pas \xE9t\xE9 trouv\xE9.`,
    'The room "${target}" was not found.': 'La room "${target}" n\'a pas \xE9t\xE9 trouv\xE9e.',
    "You do not have permission to invite people into this room.": "Tu n'as pas la permission d'inviter des gens dans cette room.",
    'This user is already in "${targetRoom.title}".': 'Cet utilisateur est d\xE9j\xE0 sur "${targetRoom.title}"',
    "Setting status messages in /busy is no longer supported. Set a status using /status.": "\xC9crire un statut avec /busy n'est plus possible. Pour le faire, utilise /status.",
    "Setting status messages in /away is no longer supported. Set a status using /status.": "\xC9crire un statut avec /away n'est plus possible. Pour le faire, utilise /status.",
    "User '${target}' not found.": "L'utilisateur ${target}' n'a pas \xE9t\xE9 trouv\xE9.",
    "${targetUser.name} does not have a status set.": "${targetUser.name} n'a pas de statut actuellement",
    '${targetUser.name}\'s status "${targetUser.userMessage}" was cleared by ${user.name}${displayReason}': 'Le statut de ${targetUser.name}, "${targetUser.userMessage}", a \xE9t\xE9 effac\xE9 par ${user.name}${displayReason}',
    "You don't have a status message set.": "Tu n'as pas encore de message de statut.",
    "You have cleared your status message.": "Tu as effac\xE9 ton message de statut.",
    "This user has not played any ladder games yet.": "Cet utilisateur n'a pas encore fait de combat de ladder.",
    "W[TN: initial for Wins]": "V",
    "L[TN: initial for Losses]": "D",
    "You already have the temporary symbol '${group}'.": "Tu as d\xE9j\xE0 temporairement le symbole '${group}'.",
    "You must specify a valid group symbol.": "Tu dois pr\xE9ciser un symbole de groupe valide.",
    "You may only set a temporary symbol below your current rank.": "Tu ne peux t'attribuer un symbole temporaire que en-dessous de ton rang actuel.",
    "Your temporary group symbol is now": "Ton symbole de groupe temporaire est maintenant",
    "Currently, you're viewing Pok\xE9mon Showdown in ${language}.": "Actuellement, tu vois Pok\xE9mon Showdown en ${language}.",
    "Valid languages are: ${languages}": "Les langues disponibles sont : ${languages}",
    "Pok\xE9mon Showdown will now be displayed in ${language} (except in language rooms).": "Pok\xE9mon Showdown sera maintenant affich\xE9 en ${language} (hors chatrooms d\xE9di\xE9es \xE0 une langue en particulier).",
    "Note that rooms can set their own language, which will override this setting.": "Note que les rooms peuvent choisir la langue dans laquelle elles s'affichent, ce qui aura priorit\xE9 sur ce changement.",
    "/updatesettings expects JSON encoded object.": "/updatesettings demande un objet cod\xE9 en JSON.",
    "Unable to parse settings in /updatesettings!": "Incapable d'analyser les param\xE8tres dans /updatesettings!",
    "Must be in a battle.": "Doit \xEAtre utilis\xE9 dans un combat.",
    "User ${target} not found.": "L'utilisateur ${target} n'a pas \xE9t\xE9 trouv\xE9.",
    "Must be a player in this battle.": "Doit \xEAtre un joueur dans ce match",
    "${targetUser.name} has not requested extraction.": "${targetUser.name} n'a pas demand\xE9 l'extraction des logs.",
    "You have already consented to extraction with ${targetUser.name}.": "Tu as d\xE9j\xE0 approuv\xE9 l'extraction des logs avec ${targetUser.name}.",
    "${user.name} consents to sharing battle team and choices with ${targetUser.name}.": "${user.name} est d'accord pour partager son \xE9quipe dans le match et ses choix en jeu avec ${targetUser.name}.",
    "No input log found.": "Aucun log de trouv\xE9.",
    "${targetUser.name} has extracted the battle input log.": "${targetUser.name} a extrait le log du combat.",
    "This command only works in battle rooms.": "Cette commande marche seulement en combat.",
    "This command only works when the battle has ended - if the battle has stalled, use /offertie.": "Cette commande marche seulement quand le combat est fini.",
    "Alternatively, you can end the battle with /forcetie.": "Alternativement, tu peux finir le combat avec /forcetie.",
    "${user.name} has extracted the battle input log.": "${user.name} a extrait le log du combat.",
    "You already extracted the battle input log.": "Tu as d\xE9j\xE0 extrait le log du combat.",
    "Battle input log re-requested.": "Le log du combat a \xE9t\xE9 demand\xE9 de nouveau.",
    "Invalid input log.": "Log invalide.",
    "Your input log contains untrusted code - you must have console access to use it.": "Ton log contient du code non s\xE9curis\xE9 - tu dois avoir acc\xE8s \xE0 la console du syst\xE8me pour l'utiliser.",
    "This command can only be used in a battle.": "Cette commande peut seulement \xEAtre utilis\xE9e en match.",
    "Only players can extract their team.": "Seuls les jouerus peuvent extraire leurs \xE9quipes.",
    "Use a number between 1-6 to view a specific set.": "Utilise un chiffre entre 1 et 6 pour voir un set sp\xE9cifique.",
    'The Pokemon "${target}" is not in your team.': 'Le Pok\xE9mon "${target}" n\'est pas dans ton \xE9quipe.',
    "That Pokemon is not in your team.": "Ce Pok\xE9mon n'est pas dans ton \xE9quipe.",
    "View team": "Voir l'\xE9quipe.",
    "Must be in a battle room.": "Doit \xEAtre en combat.",
    "This server does not allow offering ties.": "Ce serveur ne permet pas les propositions de matchs nuls.",
    "You can't offer ties in tournaments.": "Tu ne peux pas proposer un match nul en tournoi.",
    "It's too early to tie, please play until turn 100.": "C'est trop t\xF4t pour proposer un match nul, merci de jouer jusqu'au tour 100.",
    "No other player is requesting a tie right now. It was probably canceled.": "Aucun joueur ne demande un match nul. La demande a probablement \xE9t\xE9 annul\xE9e.",
    "${user.name} is offering a tie.": "${user.name} propose un match nul.",
    "Accept tie": "Accepter le match nul.",
    "Reject": "Rejeter.",
    "Must be a player to accept ties.": "Tu dois \xEAtre un des joueurs pour accepter le match nul.",
    "You have already agreed to a tie.": "Tu as d\xE9j\xE0 accept\xE9 le match nul.",
    "${user.name} accepted the tie.": "${user.name} a accept\xE9 le match nul.",
    "All players have accepted the tie.": "Tous les joueurs ont accept\xE9 le match nul.",
    "Must be a player to reject ties.": "Tu dois \xEAtre un des joueurs pour refuser le match nul.",
    "${user.name} rejected the tie.": "${user.name} a refus\xE9 le match nul.",
    "This room doesn't have an active game.": "La room n'a pas de jeu actif.",
    "This kind of game can't be forfeited.": "Il n'est pas possible d'abandonner dans ce genre de jeu.",
    "This game doesn't support /choose": "Ce jeu n'accepte pas /choose.",
    "This game doesn't support /undo": "Ce jeu n'accepte pas /undo.",
    "You can only save replays for battles.": "Tu peux seulement sauvegarder les replays des combats.",
    "This battle can't have hidden replays, because the tournament is set to be forced public.": "Ce combat ne peut pas sauvegarder de replay cach\xE9, car le tournoi est param\xE9tr\xE9 pour \xEAtre public.",
    "The replay for this battle is already set to hidden.": "Le replay de ce combat est d\xE9j\xE0 param\xE9tr\xE9 comme cach\xE9.",
    "${user.name} hid the replay of this battle.": "${user.name} a cach\xE9 le replay de ce combat.",
    "You can only do this in battle rooms.": "Tu peux seulement faire \xE7a dans les combats.",
    "You can only add a Player to unrated battles.": "Tu ne peux ajouter un autre Joueur que dans les combats non class\xE9s.",
    'Player must be set to "p1" or "p2", not "${target}".': 'Un Joueur doit \xEAtre d\xE9sign\xE9 comme "p1" ou "p2", pas "${target}".',
    "User ${name} not found.": "${name} non trouv\xE9.",
    "This room already has a player in slot ${target}.": "Ce combat a d\xE9j\xE0 un joueur en tant que ${target}.",
    "${targetUser.name} is already a player in this battle.": "${targetUser.name} est d\xE9j\xE0 un joueur dans ce match.",
    "Player 2": "Joueur 2",
    "Players could not be restored (maybe this battle already has two players?).": "Les Joueurs n'ont pas pu \xEAtre remis en place (peut-\xEAtre que ce combat a d\xE9j\xE0 deux joueurs ?).",
    "This game doesn't support /joingame": "Ce jeu n'accepte pas /joingame",
    "This game doesn't support /leavegame": "Ce jeu n'accepte pas /leavegame",
    "You can only do this in unrated non-tour battles.": "Tu peux seulement faire \xE7a dans les combats non-class\xE9s hors tournois;",
    "User ${targetUsername} not found.": "L'utilisateur ${targetUsername} n'a pas \xE9t\xE9 trouv\xE9.",
    "${targetUser.name} was kicked from a battle by ${user.name} ${displayReason}": "${targetUser.name} a \xE9t\xE9 exclu d'un combat par ${user.name} ${displayReason}",
    "You can only set the timer from inside a battle room.": "Tu ne peux param\xE9trer le timer que dans un combat.",
    "This game's timer is managed by a different command.": "Le timer du jeu est g\xE9r\xE9 par une commande diff\xE9rente.",
    "The game timer is OFF.": "Le timer du jeu est OFF.",
    "The game timer is ON (requested by ${requester})": "Le timer du jeu est ON (demand\xE9 par ${requester})",
    "Access denied.": "Acc\xE8s refus\xE9.",
    "Timer was turned off by staff. Please do not turn it back on until our staff say it's okay.": "Le timer a \xE9t\xE9 d\xE9sactiv\xE9 par le staff. Merci de ne pas le r\xE9activer jusqu'\xE0 ce que notre staff dise que c'est bon.",
    "The timer is already off.": "Le timer est d\xE9j\xE0 d\xE9sactiv\xE9.",
    '"${target}" is not a recognized timer state.': '"${target}" n\'est pas un \xE9tat possible pour le timer.',
    "Forcetimer is now OFF: The timer is now opt-in. (set by ${user.name})": "Le timer automatique est maintenant d\xE9sactiv\xE9. Le timer est maintenant activable au cas par cas.",
    "Forcetimer is now ON: All battles will be timed. (set by ${user.name})": "Le timer automatique est maintenant activ\xE9. Il d\xE9marrera automatiquement au d\xE9but de tous les combats (activ\xE9 par ${user.name}).",
    "'${target}' is not a recognized forcetimer setting.": "${target}' n'est pas un param\xE8tre reconnu pour le timer automatique.",
    "This server requires you to be rank ${groupName} or higher to search for a battle.": "Le serveur demande un rang de ${groupName} ou plus haut pour chercher un match.",
    "Since you have reached ${Config.forceregisterelo} ELO in ${target}, you must register your account to continue playing that format on ladder.": "Maintenant que tu as atteint un ELO de ${Config.forceregisterelo} en ${target}, tu dois enregistrer ton compte pour continuer de jouer ce format en class\xE9.",
    "Register": "Enregistrer son compte",
    "The user '${targetUsername}' was not found.": "L'utilisateur '${targetUsername}' n'a pas \xE9t\xE9 trouv\xE9.",
    "You are locked and cannot challenge unlocked users. If this user is your friend, ask them to challenge you instead.": "Tu es locked et ne peux pas envoyer de challenge aux utilisateurs qui ne le sont pas.",
    "You are banned from battling and cannot challenge users.": "Tu es banni des combats et ne peux pas envoyer de challenge aux autres utilisateurs",
    "You must choose a username before you challenge someone.": "Tu dois choisir un pseudo avant d'envoyer des challenges aux autres utilisateurs",
    "This server requires you to be rank ${groupName} or higher to challenge users.": "Ce serveur demande d'\xEAtre au moins ${groupName} ou plus pour envoyer des challenges aux autres utilisateurs.",
    "This command does not support specifying multiple users": "Cette commande ne permet pas de sp\xE9cifier plusieurs utilisateurs.",
    'User "${targetUsername}" not found.': `L'utilisateur "\${targetUsername}" n'a pas \xE9t\xE9 trouv\xE9.`,
    "Provide a valid format.": "Pr\xE9cise un format valide.",
    "Please provide a valid format.": "Pr\xE9cise un format valide s'il te pla\xEEt.",
    "The format '${originalFormat.name}' was not found.": "Le format '${originalFormat.name}' n'a pas \xE9t\xE9 trouv\xE9.",
    "Your team is valid for ${format.name}.": "Ton \xE9quipe est valide pour du ${format.name}",
    "Your team was rejected for the following reasons:": "Ton \xE9quipe a \xE9t\xE9 rejet\xE9e pour les raisons suivantes :",
    "Battles are now hidden (except to staff) in your trainer card.": "Les combats sont maintenant invisibles (except\xE9 au staff) dans ta carte de Dresseur.",
    "Battles are now visible in your trainer card.": "Les combats sont maintenant visibles dans ta carte de Dresseur.",
    "'${command}' is a help command.": "${command}' est une commande d'aide.",
    "The command '/${target}' does not exist.": "La commande '/${target}' n'existe pas.",
    "Could not find help for '/${target}'. Try /help for general help.": "Aucune aide trouv\xE9e pour '/${target}'. Essaie /help pour une aide plus g\xE9n\xE9rale.",
    "Could not find help for '/${target}' - displaying help for '/${closestHelp}' instead": "Impossible de trouver de l'aide pour '/${target}' - voici celle pour '/${closestHelp}' \xE0 la place"
  }
};
//# sourceMappingURL=core-commands.js.map
