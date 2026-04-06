<h1>Breif</h1>
<h2>Le damos la bienvenida</h2>
<p>Por favor indiquenos su nombre y un correo</p>

<form action="/identify" method="post">
    <?php foreach($view_fields as $id => $field) : ?>
        <div>
            <label for="<?= $id ?>"><?= $field["label"] ?></label>
            <input 
                type="<?= $field["type"] ?>"
                name="<?= $id ?>"
                id="<?= $id ?>"
                placeholder="<?= $field["placeholder"] ?>"
                <?php if(isset($field["minLength"])) : ?>
                    min="<?= $field["minLength"] ?>"
                <?php endif; ?>
                <?php if(isset($field["maxLength"])) : ?>
                    max="<?= $field["maxLength"] ?>"
                <?php endif; ?>
                >
        </div>
    <?php endforeach; ?>
    <input type="submit" value="Comenzar">
</form>