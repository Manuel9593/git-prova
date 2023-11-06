import Ammenda from "../components/parrarodriguez/Ammenda";
import Logo from "../components/parrarodriguez/Logo";
import ParraRodriguezButton from "../components/parrarodriguez/ParraRodriguezButton";

const PageParraRodriguez = () => {
    return (<>
        <Logo />
        <p>Si esegue un <code>git branch &lt;nuova branch&gt;</code> per creare una nupva branch dall'ultimo commit</p>
        <p>E <code>git reset --hard HEAD~n</code> o <code>git reset --hard  &lt;codice commit&gt;</code> per quanti commit volete spostare la branch d'inizio</p>

        <p>Da branch <code>cognome-init</code> si può fare la pull da <code>origin/master</code> con opzione rebase</p>
        <p>La soluzione sarebbe questa: <code>git pull --rebase origin master</code></p>

        <p>Insalata di polpo</p>
        <p>Lasagna alla bolognese</p>
        <p>Tagliata di manzo</p>
        <p>Tetta della monaca (dolce pugliese)</p>

        <p>Eminem</p>
        <p>Brad Pitt</p>
        <p>Cristiano Ronaldo</p>
        <p>Fare il <code>git checkout</code> su master e poi fare <code>git merge --squash &lt;nome_branch&gr;</code> verso la branch che vuoi comprimere</p>

        <Ammenda />

        <ParraRodriguezButton />
        <p>Eseguire lo stesso comando per comprimere dei commit recenti: <code>git rebase -i &lt;commit&gt;</code>. Questo comando ti riporta appena prima dell'ultimo commit. Poi eseguire un reset su <code>HEAD~</code> per ripristinare le modifiche e creare quanti commit si vogliano. Alla fine si esegue il <code>git rebase --continue</code> per terminare la rebase</p>

        <p>Per ripristinare lo stato di una branch ad un commit specifico con tutte le sue modifiche, si esegue <code>git revert &lt;codice_commit&gt;</code></p>
        cdubvbfduvbudciscb

        <p>Angular è il framework più bello del mondo</p>
    </>);
}

export default PageParraRodriguez;