import { Box, Card, Divider, Flex, Text, Input, RadioGroup, Radio, Textarea, Select, Button, VStack, CloseButton, InputGroup, InputLeftAddon, Heading } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import React, { useState } from 'react';

import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // Estilos do editor
import ProductService from '../../../../services/http/product.service';
import FormComponent from '../../components/common/form.component';
import ImageUploadCard from '../../components/ui/image-uploader.component';

const fields = [
    [
        { w: '70%', id: 'name', title: 'Produto' },
        { w: '30%', id: 'reference', title: 'Referência' }
    ],
    [
        { w: '35%', id: 'price', title: 'Preço', icon: 'R$' },
        { w: '35%', id: 'weight', title: 'Peso', icon: 'kg' },
        { w: '30%', id: 'size', title: 'Tamanho', icon: 'm³' }
    ],
];

const ProductPage = () => {
    const [product, setProduct] = React.useState({});
    const [images, setImages] = React.useState([]);
    const { id } = useParams();

    const handleDescriptionChange = (value) => {
        setProduct({ ...product, description: value });
    };

    const handleSubmit = async () => {
        if(!product._id)
            await ProductService.create(product).then(res => console.log(res)).catch(err => console.log(err));
        else
            await ProductService.update(id, product)
    }

    const fetchProductData = async (productId) => {
        await ProductService.get(productId).then(res => setProduct(res)).catch(err => console.log(err));
      };

    React.useEffect(() => {
        console.log(id)
        if (id) {
            fetchProductData(id);
        }
    }, [id]);

    return (
        <Flex flex={1} flexDir='column' gap={4}>
            <Flex flex={1} gap={4} justifyContent='center'>
                <Flex flexDir='column' gap={4}>
                    <Card p={4} flex={1}>
                        <Text fontSize='sm' fontWeight='bold' mb={2}>Geral</Text>
                        <Flex flexDir='column' gap={4} justifyContent='space-between'>
                            <FormComponent fields={fields} model={product} setModel={setProduct} />
                            <Box>
                                <Text mb={1}>Descrição</Text>
                                <ReactQuill
                                    value={product.description}
                                    onChange={handleDescriptionChange}
                                    style={{ height: '150px' }}
                                    modules={{
                                        toolbar: [
                                            ['bold', 'italic', 'underline', 'strike'],        // Negrito, Itálico, Sublinhado, Tachado
                                            [{ 'list': 'ordered' }, { 'list': 'bullet' }],    // Lista ordenada, Lista não ordenada
                                            ['link', 'image'],                                // Link, Imagem
                                            ['clean'],                                        // Limpar formatação
                                        ],
                                    }}
                                />
                            </Box>
                        </Flex>
                    </Card>
                    <Card p={4}>
                        <Text fontSize='sm' fontWeight='bold' mb={2}>Imagens</Text>
                        <ImageUploadCard images={images} setImages={setImages} />
                    </Card>
                </Flex>
                <Flex w='350px' gap={4} flexDir='column'>
                    <Card p={4} w='350px'>
                        <Text fontSize='sm' fontWeight='bold' mb={2}>Estado</Text>
                        <Text fontSize='sm' mb={2}>Situação</Text>
                        <RadioGroup size='sm' defaultValue='sim' mt={2}>
                            <VStack spacing={2} align='start'>
                                <Radio value='sim'>Ativo</Radio>
                                <Radio value='nao'>Inativo</Radio>
                            </VStack>
                        </RadioGroup>
                        <Divider my={4} />
                        <Text fontSize='sm'>Visível?</Text>
                        <RadioGroup size='sm' defaultValue='sim' mt={2}>
                            <VStack spacing={2} align='start'>
                                <Radio value='sim'>Sim</Radio>
                                <Radio value='nao'>Não</Radio>
                            </VStack>
                        </RadioGroup>
                    </Card>
                    <Card p={4} w='350px'>
                        <Text fontSize='sm' fontWeight='bold' mb={2}>Inventário</Text>
                        <Text fontSize='sm'>Gerenciar estoque?</Text>
                        <RadioGroup size='sm' defaultValue='sim' mt={2}>
                            <VStack spacing={2} align='start'>
                                <Radio value='sim'>Sim</Radio>
                                <Radio value='nao'>Não</Radio>
                            </VStack>
                        </RadioGroup>
                        <Divider my={4} />
                        <Text fontSize='sm'>Disponível no estoque?</Text>
                        <RadioGroup size='sm' defaultValue='sim' mt={2}>
                            <VStack spacing={2} align='start'>
                                <Radio value='sim'>Sim</Radio>
                                <Radio value='nao'>Não</Radio>
                            </VStack>
                        </RadioGroup>
                    </Card>
                    <Card p={4} w='350px'>
                        <Text fontSize='sm' fontWeight='bold' mb={2}>Grupo</Text>
                        <Select size='sm' placeholder='Selecione um grupo'>
                            <option value='roupas'>Roupas</option>
                            <option value='eletronicos'>Eletrônicos</option>
                        </Select>
                        <Divider my={4} />
                        <Text fontSize='sm' fontWeight='bold'>Atributos</Text>
                        <InputGroup>
                        </InputGroup>
                    </Card>
                </Flex>
            </Flex>
            <Divider />
            <Flex justifyContent='flex-end' gap={12} px={12}>
                <Button>Cancelar</Button>
                <Button onClick={() => { handleSubmit() }}>Salvar</Button>
            </Flex>
        </Flex>
    );
};

export default ProductPage;
