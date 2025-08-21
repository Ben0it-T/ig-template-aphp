/**
 * PrismJS Language Definition for FHIR Mapping Language (FML)
 * Based on: https://build.fhir.org/mapping.g4
 * 
 * Usage: Include this after PrismJS core in your HTML:
 * <script src="prism.js"></script>
 * <script src="prism-fml.js"></script>
 * 
 * Then use: <pre><code class="language-fml">...</code></pre>
 */

(function (Prism) {
    'use strict';

    Prism.languages.fml = {
        // Commentaires (doit être défini en premier pour avoir la priorité)
        'comment': [
            {
                pattern: /\/\*[\s\S]*?\*\//,
                greedy: true
            },
            {
                pattern: /\/\/.*/,
                greedy: true
            }
        ],

        // nom de group
        'group-name': [
            {
                pattern: /(group\s*)[a-zA-Z_][a-zA-Z0-9_]*(?=\()/,
                lookbehind: true,
                greedy: true
            }

        ],

        // type de paramètre
        'type-name': [
            {
                pattern: /(:\s*)(([A-Za-z]+))(?=[),])/,
                lookbehind: true,
                greedy: true
            }

        ],

        // nom des rêgles
        'rule-name': [
            {
                pattern: /["'](?:[^"'\\]|\\.)*["']*;/,
                greedy: true
            }
        ],

        // Identifiants généraux
        'variable': [
            {
                pattern: /(source\s*|target\s*|as\s*)[a-zA-Z0-9_]+/,
                lookbehind: true,
                greedy: true
            }
        ],

        // Chaînes de caractères ou identifiants délimités
        'constant': [
            {
                pattern: /'(?:[^'\\]|\\.)*'/,
                greedy: true
            },
            {
                pattern: /`(?:[^`\\]|\\.)*`/,
                greedy: true,
                alias: 'delimited-identifier'
            }
        ],

        // Dates et temps
        'datetime': [
            {
                pattern: /@\d{4}(-\d{2}(-\d{2})?)?(T\d{2}(:\d{2}(:\d{2}(\.\d+)?)?)?(Z|[+-]\d{2}:\d{2})?)?/,
                alias: 'date'
            },
            {
                pattern: /@T\d{2}(:\d{2}(:\d{2}(\.\d+)?)?)?/,
                alias: 'time'
            }
        ],

        // Mots-clés principaux
        'keyword': /\b(?:map|uses|as|alias|imports|let|group|extends|then|where|check|log|default)\b/,

        // Modes et modificateurs
        'builtin': /\b(?:source|target|queried|produced|first|not_first|last|not_last|only_one|share|single|types|type\+)\b/,

        // Booléens
        'boolean': /\b(?:true|false)\b/,

        // Nombres
        'number': /\b\d+(?:\.\d+)?\b/,

        // Types de cardinalité
        'cardinality': {
            pattern: /\b\d+\.\\.(?:\d+|\*)/,
            inside: {
                'punctuation': /\.\./,
                'operator': /\*/
            }
        },

        // Opérateurs de transformation
        'arrow': {
            pattern: /->/,
            alias: 'operator'
        },

        // Opérateurs de type
        'type-operator': {
            pattern: /<<|>>/,
            alias: 'operator'
        },

        // Ponctuation et opérateurs
        'punctuation': /[{}()\[\],;]/,
        
        'operator': /[:=\.]/,

        // Identifiants de fonction/invocation
        'function': {
            pattern: /\b[a-zA-Z_][a-zA-Z0-9_]*(?=\s*\()/,
            greedy: true
        },

        // Chemins de contexte (ex: patient.name.family)
        'property': {
            pattern: /\b[a-zA-Z_][a-zA-Z0-9_]*(?:\.[a-zA-Z_][a-zA-Z0-9_]*)*/,
            greedy: true,
            inside: {
                'punctuation': /\./
            }
        }
    };

    // Alias pour une meilleure compatibilité
    Prism.languages.fhirmap = Prism.languages.fml;
    Prism.languages['fhir-mapping'] = Prism.languages.fml;

    // Hook pour améliorer la coloration des structures spécifiques
    Prism.hooks.add('before-tokenize', function(env) {
        if (env.language !== 'fml') return;
        
        // Prétraitement optionnel si nécessaire
    });

    // Hook pour post-traitement des tokens
    Prism.hooks.add('after-tokenize', function(env) {
        if (env.language !== 'fml') return;
        
        // Post-traitement optionnel pour des cas spéciaux
    });

}(Prism));