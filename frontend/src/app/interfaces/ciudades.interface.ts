export interface multimedia{
    _id: string;
    url: string;
    tipo?: string;
    estado: boolean;
    IdGrupoMultimedia: {
        _id: string;
        nombre: string;
    };
    usuario: {
        _id: string;
        nombre: string;
    };
    fecha_creacion: string;
    fecha_actualizacion: string;
};

export interface multimediaApi{
    Ok: boolean;
    total: number;
    resp: Array<multimedia>;
}
