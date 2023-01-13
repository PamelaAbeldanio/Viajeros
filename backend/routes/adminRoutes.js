const express = require('express');

const router = express.Router();

const adminController = require('../controllers/adminController'); 
const adminMiddleware = require('../middlewares/adminMiddleware');
const multer = require('multer');

const path = require('path')
const { check } = require('express-validator');

router.use(adminMiddleware);

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname,'../public/img'));
    },
    filename: (req, file, cb) => {
        const newFilename = 'img-' + Date.now() + path.extname(file.originalname);
        cb(null, newFilename);
    }
})

const uploadFile = multer({storage});

const validationsProducts = [
    check('name')
        .notEmpty().withMessage('Debes ingresar un nombre de destino').bail()
        .isLength({min:5}).withMessage('El nombre de destino debe contener al menos 5 caracteres'),
    check('img').custom((value, {req}) => {
            const imgInfo = req.file.filename.split('.')
            if(imgInfo[1] == 'png' || imgInfo[1] == 'jpg' || imgInfo[1] == 'jpeg' || imgInfo[1] == 'gif') {
                return imgInfo[1];
            } else {
                return false
            }
        }).withMessage('La img debe de ser de formato png, jpg, jpeg, gif'),
    check('detail')    
        .notEmpty().withMessage('Debes ingresar un detalle del destino').bail()
        .isLength({min:20}).withMessage('La descripción de destino debe contener al menos 20 caracteres'),
    
]

const validationsProductsEdit = [
    check('newName')
        .notEmpty().withMessage('Debes ingresar un nombre de destino').bail()
        .isLength({min:5}).withMessage('El nombre de destino debe contener al menos 5 caracteres'),
    check('img').custom((value, {req}) => {
            const imgInfo = req.file.filename.split('.')
            if(imgInfo[1] == 'png' || imgInfo[1] == 'jpg' || imgInfo[1] == 'jpeg' || imgInfo[1] == 'gif') {
                return imgInfo[1];
            } else {
                return false
            }
        }).withMessage('La img debe de ser de formato png, jpg, jpeg, gif'),
    check('newDetail')    
        .notEmpty().withMessage('Debes ingresar un detalle del destino').bail()
        .isLength({min:20}).withMessage('La descripción de destino debe contener al menos 20 caracteres'),
    
]

const validationsUserEdit = [
    check('firstName')
        .notEmpty().withMessage('Debes ingresar un nombre de destino').bail()
        .isLength({min:5}).withMessage('El nombre de destino debe contener al menos 5 caracteres'),
    check('img').custom((value, {req}) => {
        const imgInfo = req.file.filename.split('.')
        if(imgInfo[1] == 'png' || imgInfo[1] == 'jpg' || imgInfo[1] == 'jpeg' || imgInfo[1] == 'gif') {
            return imgInfo[1];
        } else {
            return false
        }
    }).withMessage('La img debe de ser de formato png, jpg, jpeg, gif'),
]


router.get('/adminList', adminController.adminList);

router.get('/create', adminController.add);
router.post('/create', uploadFile.single('img'), validationsProducts, adminController.create);

router.get('/comentarios', adminController.comments);

router.get('/edit/:id', adminController.productEdit);
router.put('/edit/:id/storage', uploadFile.single('img'),validationsProductsEdit, adminController.saveEdit);

router.delete('/delete/:id', adminController.delete);

router.get('/userList', adminController.userList);
router.get('/userEdit/:userId', adminController.editUser);
router.put('/userEdit/:userId/storage', uploadFile.single('img'), validationsUserEdit, adminController.saveUserEdit);
router.delete('/userDelete/:userId', adminController.deleteUser);


module.exports = router;